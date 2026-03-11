<?php
/**
 * Courses / Modules / Lessons CPTs + REST endpoints
 * Drop into functions.php (or convert to a small plugin)
 */

/**
 * Register CPTs
 */
function cc_register_cpts()
{
    // COURSE
    register_post_type('course', [
        'labels' => [
            'name' => 'Courses',
            'singular_name' => 'Course',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-welcome-learn-more',
        'supports' => ['title', 'editor', 'thumbnail', 'author'],
    ]);

    // MODULE
    register_post_type('module', [
        'labels' => [
            'name' => 'Modules',
            'singular_name' => 'Module',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-category',
        'supports' => ['title', 'thumbnail', 'editor'],
    ]);

    // LESSON
    register_post_type('lesson', [
        'labels' => [
            'name' => 'Lessons',
            'singular_name' => 'Lesson',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-media-default',
        'supports' => ['title', 'editor', 'thumbnail'],
    ]);
}
add_action('init', 'cc_register_cpts', 0);

/**
 * Register meta fields (visible in REST)
 */
function cc_register_meta()
{
    // Course meta
    register_post_meta('course', 'rating', ['show_in_rest' => true, 'single' => true, 'type' => 'number']);
    register_post_meta('course', 'progress', ['show_in_rest' => true, 'single' => true, 'type' => 'number']);
    register_post_meta('course', 'students', ['show_in_rest' => true, 'single' => true, 'type' => 'number']);
    register_post_meta('course', 'created_date', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('course', 'deleted', ['show_in_rest' => true, 'single' => true, 'type' => 'boolean']);
    register_post_meta('course', 'thumbnail', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);

    // Module meta
    register_post_meta('module', 'course_id', ['show_in_rest' => true, 'single' => true, 'type' => 'integer']);
    register_post_meta('module', 'status', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('module', 'deleted', ['show_in_rest' => true, 'single' => true, 'type' => 'boolean']);
    register_post_meta('module', 'thumbnail', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);

    // Lesson meta
    register_post_meta('lesson', 'module_id', ['show_in_rest' => true, 'single' => true, 'type' => 'integer']);
    register_post_meta('lesson', 'mediaType', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'thumbnail', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'duration', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'liveLink', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'scheduledTime', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'status', ['show_in_rest' => true, 'single' => true, 'type' => 'string']);
    register_post_meta('lesson', 'history', ['show_in_rest' => true, 'single' => true, 'type' => 'array']);
    register_post_meta('lesson', 'deleted', ['show_in_rest' => true, 'single' => true, 'type' => 'boolean']);
}
add_action('init', 'cc_register_meta');

/**
 * Helpers
 */
function cc_get_param($arr, $key, $default = '')
{
    return isset($arr[$key]) ? $arr[$key] : $default;
}
function cc_return_error($message, $code = 400)
{
    return new WP_REST_Response(['error' => $message], $code);
}

/**
 * Create Course
 * POST: /wp-json/custom-courses/v1/course/create
 * body: { title, content, thumbnail (url), rating, progress, students, created_date }
 */
function cc_create_course_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();

    $title = sanitize_text_field(cc_get_param($data, 'title', 'New Course'));
    $content = sanitize_textarea_field(cc_get_param($data, 'content', ''));
    $thumbnail    = cc_get_param($data, 'thumbnail', '');
    $rating = floatval(cc_get_param($data, 'rating', 0));
    $progress = intval(cc_get_param($data, 'progress', 0));
    $students = intval(cc_get_param($data, 'students', 0));
    $created_date = sanitize_text_field(cc_get_param($data, 'created_date', current_time('F j, Y')));

    // 1. Create Course
    $course_id = wp_insert_post([
        'post_type'   => 'course',
        'post_title'  => wp_trim_words($title, 50, ''),
        'post_content' => $content,
        'post_status' => 'publish',
    ]);

    if (is_wp_error($course_id)) {
        return cc_return_error('Failed to create course', 500);
    }

    // Save course meta
    if (!empty($thumbnail)) {
        if (strpos($thumbnail, 'data:image/') === 0) {
            $upload = save_base64_image_to_media_library($thumbnail, $course_id);
            if (!is_wp_error($upload)) {
                update_post_meta($course_id, 'thumbnail', $upload);
            }
        } else {
            update_post_meta($course_id, 'thumbnail', esc_url_raw($thumbnail));
        }
    }
    update_post_meta($course_id, 'rating', $rating);
    update_post_meta($course_id, 'progress', $progress);
    update_post_meta($course_id, 'students', $students);
    update_post_meta($course_id, 'created_date', $created_date);
    update_post_meta($course_id, 'deleted', false);

    // 2. Create Default Module
    $module_title = $title . ' - Module 1';
    $module_id = wp_insert_post([
        'post_type'   => 'module',
        'post_title'  => $module_title,
        'post_content' => '',
        'post_status' => 'publish',
    ]);

    if (!is_wp_error($module_id)) {
        update_post_meta($module_id, 'course_id', $course_id);
        update_post_meta($module_id, 'status', 'draft');
        update_post_meta($module_id, 'deleted', false);

        // 3. Create Default Lesson
        $lesson_title = $title . ' - Lesson 1';
        $lesson_content = sprintf(
            '<h1><strong style="color: rgb(17, 24, 39);">%s</strong></h1><h3><span style="color: rgb(80, 70, 230);">%s</span></h3>',
            esc_html($lesson_title),
            esc_html($module_title)
        );
        remove_filter('content_save_pre', 'wp_filter_post_kses');
        remove_filter('content_filtered_save_pre', 'wp_filter_post_kses');

        $lesson_id = wp_insert_post([
            'post_type'   => 'lesson',
            'post_title'  => $lesson_title,
            'post_content' => $lesson_content,
            'post_status' => 'publish',
        ]);

        if (!is_wp_error($lesson_id)) {
            update_post_meta($lesson_id, 'module_id', $module_id);
            update_post_meta($lesson_id, 'mediaType', 'none');
            update_post_meta($lesson_id, 'status', 'draft');
            update_post_meta($lesson_id, 'deleted', false);
            update_post_meta($lesson_id, 'history', []);
        }
    }

    return new WP_REST_Response([
        'message'   => 'Course created with default module and lesson',
        'course_id' => $course_id,
        'module_id' => $module_id ?? null,
        'lesson_id' => $lesson_id ?? null
    ], 200);
}
function cc_create_course(WP_REST_Request $request) {
    $title = sanitize_text_field($request->get_param('title'));
    if (!$title) return cc_return_error('Missing course title');

    $course_id = wp_insert_post([
        'post_type'   => 'course',
        'post_title'  => $title,
        'post_status' => 'publish',
        'post_content'=> sanitize_textarea_field($request->get_param('content')),
    ]);

    if (is_wp_error($course_id)) return cc_return_error('Failed to create course');

    // Thumbnail (file upload)
    if (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $course_id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    update_post_meta($course_id, 'rating', floatval($request->get_param('rating') ?? 0));
    update_post_meta($course_id, 'progress', 0);
    update_post_meta($course_id, 'students', 0);
    update_post_meta($course_id, 'created_date', current_time('mysql'));

    return new WP_REST_Response(['id' => $course_id], 201);
}

/**
 * Edit Course
 * POST: /wp-json/custom-courses/v1/course/edit
 * body: { id, title, content, thumbnail, rating, progress, students, created_date }
 */
function cc_edit_course_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing course id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'course') return cc_return_error('Invalid course id', 404);

    $update = [];
    if (isset($data['title'])) $update['post_title'] = wp_trim_words(sanitize_text_field($data['title']), 50, '');
    if (isset($data['content'])) $update['post_content'] = sanitize_textarea_field($data['content']);
    $update['ID'] = $id;

    wp_update_post($update);

    if (isset($data['thumbnail'])) {
        $thumbnail = $data['thumbnail'];

        // Delete old thumbnail if it was an attachment ID
        $old_thumb = get_post_meta($id, 'thumbnail', true);
        if ($old_thumb && is_numeric($old_thumb)) {
            wp_delete_attachment(intval($old_thumb), true);
        }

        if (!empty($thumbnail)) {
            if (strpos($thumbnail, 'data:image/') === 0) {
                $upload = save_base64_image_to_media_library($thumbnail, $id);
                if (!is_wp_error($upload)) {
                    update_post_meta($id, 'thumbnail', $upload); // store attachment ID
                }
            } else {
                update_post_meta($id, 'thumbnail', esc_url_raw($thumbnail));
            }
        } else {
            delete_post_meta($id, 'thumbnail');
        }
    }
    if (isset($data['rating'])) update_post_meta($id, 'rating', floatval($data['rating']));
    if (isset($data['progress'])) update_post_meta($id, 'progress', intval($data['progress']));
    if (isset($data['students'])) update_post_meta($id, 'students', intval($data['students']));
    if (isset($data['created_date'])) update_post_meta($id, 'created_date', sanitize_text_field($data['created_date']));

    return new WP_REST_Response(['message' => 'Course updated'], 200);
}
function cc_edit_course(WP_REST_Request $request) {
    $id = intval($request->get_param('id'));
    $post = get_post($id);
    if (!$post || $post->post_type !== 'course') return cc_return_error('Invalid course id', 404);

    $update = ['ID' => $id];
    if ($request->get_param('title') !== null) {
        $update['post_title'] = sanitize_text_field($request->get_param('title'));
    }
    if ($request->get_param('content') !== null) {
        $update['post_content'] = sanitize_textarea_field($request->get_param('content'));
    }
    wp_update_post($update);

    // Thumbnail clear or replace
    if ($request->get_param('thumbnail') === "") {
        $old = get_post_meta($id, 'thumbnail', true);
        if ($old && is_numeric($old)) wp_delete_attachment(intval($old), true);
        delete_post_meta($id, 'thumbnail');
    } elseif (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    // Numeric + meta fields
    if ($request->get_param('rating') !== null) {
        update_post_meta($id, 'rating', $request->get_param('rating') === "" ? "" : floatval($request->get_param('rating')));
    }
    if ($request->get_param('progress') !== null) {
        update_post_meta($id, 'progress', $request->get_param('progress') === "" ? "" : intval($request->get_param('progress')));
    }
    if ($request->get_param('students') !== null) {
        update_post_meta($id, 'students', $request->get_param('students') === "" ? "" : intval($request->get_param('students')));
    }
    if ($request->get_param('created_date') !== null) {
        update_post_meta($id, 'created_date', $request->get_param('created_date'));
    }

    return new WP_REST_Response(['message' => 'Course updated'], 200);
}

/**
 * Soft-delete Course
 * POST: /wp-json/custom-courses/v1/course/delete
 * body: { id }
 */
function cc_delete_course(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing course id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'course') return cc_return_error('Invalid course id', 404);

    // Soft delete: mark deleted true and optional title/content set to [deleted]
    update_post_meta($id, 'deleted', true);
    wp_update_post(['ID' => $id, 'post_content' => '[deleted]']);

    return new WP_REST_Response(['message' => 'Course soft-deleted'], 200);
}

/**
 * Create Module
 * POST: /wp-json/custom-courses/v1/module/create
 * body: { title, content, course_id, status }
 */
function cc_create_module_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $title = sanitize_text_field(cc_get_param($data, 'title', 'New Module'));
    $content = sanitize_textarea_field(cc_get_param($data, 'content', ''));
    $course_id = intval(cc_get_param($data, 'course_id', 0));
    if (!$course_id) return cc_return_error('Missing course_id', 400);

    $course = get_post($course_id);
    if (!$course || $course->post_type !== 'course') return cc_return_error('Invalid course_id', 404);

    $post_id = wp_insert_post([
        'post_type' => 'module',
        'post_title' => wp_trim_words($title, 50, ''),
        'post_content' => $content,
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) return cc_return_error('Failed to create module', 500);

    $thumbnail = cc_get_param($data, 'thumbnail', '');
    if (!empty($thumbnail)) {
        if (strpos($thumbnail, 'data:image/') === 0) {
            $upload = save_base64_image_to_media_library($thumbnail, $post_id);
            if (!is_wp_error($upload)) {
                update_post_meta($post_id, 'thumbnail', $upload); // store attachment ID
            }
        } else {
            update_post_meta($post_id, 'thumbnail', esc_url_raw($thumbnail)); // fallback if plain URL
        }
    }

    update_post_meta($post_id, 'course_id', $course_id);
    update_post_meta($post_id, 'status', sanitize_text_field(cc_get_param($data, 'status', 'draft')));
    update_post_meta($post_id, 'deleted', false);

    return new WP_REST_Response(['message' => 'Module created', 'id' => $post_id], 200);
}
function cc_create_module(WP_REST_Request $request) {
    $title = sanitize_text_field($request->get_param('title'));
    $parent_course = intval($request->get_param('course_id'));
    if (!$title || !$parent_course) return cc_return_error('Missing title or course id');

    $module_id = wp_insert_post([
        'post_type'   => 'module',
        'post_title'  => $title,
        'post_status' => 'publish',
        'post_parent' => $parent_course,
    ]);

    if (is_wp_error($module_id)) return cc_return_error('Failed to create module');

    if (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $module_id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    return new WP_REST_Response(['id' => $module_id], 201);
}

/**
 * Edit Module
 * POST: /wp-json/custom-courses/v1/module/edit
 * body: { id, title, content, course_id, status }
 */
function cc_edit_module_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing module id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'module') return cc_return_error('Invalid module id', 404);

    $update = ['ID' => $id];
    if (isset($data['title'])) $update['post_title'] = wp_trim_words(sanitize_text_field($data['title']), 50, '');
    if (isset($data['content'])) $update['post_content'] = sanitize_textarea_field($data['content']);
    wp_update_post($update);

    if (isset($data['course_id'])) {
        $new_course = intval($data['course_id']);
        $course = get_post($new_course);
        if ($course && $course->post_type === 'course') {
            update_post_meta($id, 'course_id', $new_course);
        }
    }

    if (isset($data['thumbnail'])) {
        $thumbnail = $data['thumbnail'];

        // Delete old thumbnail if it was an attachment ID
        $old_thumb = get_post_meta($id, 'thumbnail', true);
        if ($old_thumb && is_numeric($old_thumb)) {
            wp_delete_attachment(intval($old_thumb), true);
        }

        if (!empty($thumbnail)) {
            if (strpos($thumbnail, 'data:image/') === 0) {
                $upload = save_base64_image_to_media_library($thumbnail, $id);
                if (!is_wp_error($upload)) {
                    update_post_meta($id, 'thumbnail', $upload); // store attachment ID
                }
            } else {
                update_post_meta($id, 'thumbnail', esc_url_raw($thumbnail));
            }
        } else {
            delete_post_meta($id, 'thumbnail');
        }
    }

    if (isset($data['status'])) update_post_meta($id, 'status', sanitize_text_field($data['status']));

    return new WP_REST_Response(['message' => 'Module updated'], 200);
}
function cc_edit_module(WP_REST_Request $request) {
    $id = intval($request->get_param('id'));
    $post = get_post($id);
    if (!$post || $post->post_type !== 'module') return cc_return_error('Invalid module id', 404);

    $update = ['ID' => $id];
    if ($request->get_param('title') !== null) {
        $update['post_title'] = sanitize_text_field($request->get_param('title'));
    }
    wp_update_post($update);

    // Thumbnail clear or replace
    if ($request->get_param('thumbnail') === "") {
        $old = get_post_meta($id, 'thumbnail', true);
        if ($old && is_numeric($old)) wp_delete_attachment(intval($old), true);
        delete_post_meta($id, 'thumbnail');
    } elseif (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    return new WP_REST_Response(['message' => 'Module updated'], 200);
}


/**
 * Soft delete Module
 * POST: /wp-json/custom-courses/v1/module/delete
 * body: { id }
 */
function cc_delete_module(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing module id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'module') return cc_return_error('Invalid module id', 404);

    // Soft delete module
    update_post_meta($id, 'deleted', true);
    wp_update_post(['ID' => $id, 'post_content' => '[deleted]']);

    return new WP_REST_Response(['message' => 'Module soft-deleted'], 200);
}

/**
 * Create Lesson
 * POST: /wp-json/custom-courses/v1/lesson/create
 * body: { title, content, module_id, mediaType, thumbnail, duration, liveLink, scheduledTime, status }
 */
function cc_create_lesson_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $title = sanitize_text_field(cc_get_param($data, 'title', 'New Lesson'));
    $content = sanitize_textarea_field(cc_get_param($data, 'content', ''));
    $module_id = intval(cc_get_param($data, 'module_id', 0));
    if (!$module_id) return cc_return_error('Missing module_id', 400);

    $module = get_post($module_id);
    if (!$module || $module->post_type !== 'module') return cc_return_error('Invalid module_id', 404);

    $post_id = wp_insert_post([
        'post_type'   => 'lesson',
        'post_title'  => wp_trim_words($title, 50, ''),
        'post_content' => $content,
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) return cc_return_error('Failed to create lesson', 500);

    // --- Meta ---
    $mediaType = sanitize_text_field(cc_get_param($data, 'mediaType', 'none'));
    update_post_meta($post_id, 'module_id', $module_id);
    update_post_meta($post_id, 'mediaType', $mediaType);
    update_post_meta($post_id, 'duration', sanitize_text_field(cc_get_param($data, 'duration', '')));
    update_post_meta($post_id, 'liveLink', esc_url_raw(cc_get_param($data, 'liveLink', '')));
    update_post_meta($post_id, 'scheduledTime', sanitize_text_field(cc_get_param($data, 'scheduledTime', '')));
    update_post_meta($post_id, 'status', sanitize_text_field(cc_get_param($data, 'status', 'draft')));
    update_post_meta($post_id, 'history', []);
    update_post_meta($post_id, 'deleted', false);

    // --- Thumbnail (image only) ---
    $thumbnail = cc_get_param($data, 'thumbnail', '');
    if (!empty($thumbnail)) {
        if (strpos($thumbnail, 'data:image/') === 0) {
            $upload = save_base64_image_to_media_library($thumbnail, $post_id);
            if (!is_wp_error($upload)) {
                update_post_meta($post_id, 'thumbnail', $upload);
            }
        } else {
            update_post_meta($post_id, 'thumbnail', esc_url_raw($thumbnail));
        }
    }

    // --- Media (file for video/audio/image etc.) ---
    $media = cc_get_param($data, 'media', '');
    if (!empty($media)) {
        if (strpos($media, 'data:') === 0) {
            $upload = save_base64_file_to_media_library($media, $post_id, $mediaType);
            if (!is_wp_error($upload)) {
                update_post_meta($post_id, 'media', $upload);
            }
        } else {
            update_post_meta($post_id, 'media', esc_url_raw($media));
        }
    }

    return new WP_REST_Response(['message' => 'Lesson created', 'id' => $post_id], 200);
}
function cc_create_lesson(WP_REST_Request $request) {
    $title = sanitize_text_field($request->get_param('title'));
    $parent_module = intval($request->get_param('module_id'));
    if (!$title || !$parent_module) return cc_return_error('Missing title or module id');

    $lesson_id = wp_insert_post([
        'post_type'   => 'lesson',
        'post_title'  => $title,
        'post_status' => 'publish',
        'post_parent' => $parent_module,
        'post_content'=> sanitize_textarea_field($request->get_param('content')),
    ]);

    if (is_wp_error($lesson_id)) return cc_return_error('Failed to create lesson');

    // Thumbnail
    if (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $lesson_id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    // Media (image/video/audio)
    if (!empty($_FILES['media'])) {
        $res = cc_handle_file_upload('media', $lesson_id, 'media');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    update_post_meta($lesson_id, 'status', sanitize_text_field($request->get_param('status') ?? 'draft'));
    update_post_meta($lesson_id, 'duration', sanitize_text_field($request->get_param('duration') ?? ''));
    update_post_meta($lesson_id, 'live_link', esc_url_raw($request->get_param('live_link') ?? ''));
    update_post_meta($lesson_id, 'scheduled_time', sanitize_text_field($request->get_param('scheduled_time') ?? ''));

    return new WP_REST_Response(['id' => $lesson_id], 201);
}

/**
 * Edit Lesson (also supports moving a lesson to another module by providing module_id)
 * POST: /wp-json/custom-courses/v1/lesson/edit
 * body: { id, title, content, module_id, mediaType, thumbnail, duration, liveLink, scheduledTime, status, timestamp }
 */
function cc_edit_lesson_old(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing lesson id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'lesson') return cc_return_error('Invalid lesson id', 404);

    // Save history
    $history = get_post_meta($id, 'history', true) ?: [];
    $history[] = [
        'content'   => $post->post_content,
        'timestamp' => sanitize_text_field(cc_get_param($data, 'timestamp', current_time('mysql'))),
    ];

    // Update post
    $update = ['ID' => $id];
    if (isset($data['title'])) $update['post_title'] = wp_trim_words(sanitize_text_field($data['title']), 50, '');
    if (isset($data['content'])) $update['post_content'] = $data['content'];
    remove_filter('content_save_pre', 'wp_filter_post_kses');
    remove_filter('content_filtered_save_pre', 'wp_filter_post_kses');
    wp_update_post($update);

    // If moving to another module
    if (isset($data['module_id'])) {
        $new_module = intval($data['module_id']);
        $module = get_post($new_module);
        if ($module && $module->post_type === 'module') {
            update_post_meta($id, 'module_id', $new_module);
        }
    }

    // Meta updates
    if (isset($data['mediaType'])) update_post_meta($id, 'mediaType', sanitize_text_field($data['mediaType']));
    if (isset($data['duration'])) update_post_meta($id, 'duration', sanitize_text_field($data['duration']));
    if (isset($data['liveLink'])) update_post_meta($id, 'liveLink', esc_url_raw($data['liveLink']));
    if (isset($data['scheduledTime'])) update_post_meta($id, 'scheduledTime', sanitize_text_field($data['scheduledTime']));
    if (isset($data['status'])) update_post_meta($id, 'status', sanitize_text_field($data['status']));

    // Thumbnail (image only)
    if (isset($data['thumbnail'])) {
        $thumbnail = $data['thumbnail'];

        // Delete old thumbnail if it was an attachment ID
        $old_thumb = get_post_meta($id, 'thumbnail', true);
        if ($old_thumb && is_numeric($old_thumb)) {
            wp_delete_attachment(intval($old_thumb), true);
        }

        if (!empty($thumbnail)) {
            if (strpos($thumbnail, 'data:image/') === 0) {
                $upload = save_base64_image_to_media_library($thumbnail, $id);
                if (!is_wp_error($upload)) {
                    update_post_meta($id, 'thumbnail', $upload); // store attachment ID
                }
            } else {
                update_post_meta($id, 'thumbnail', esc_url_raw($thumbnail));
            }
        } else {
            delete_post_meta($id, 'thumbnail');
        }
    }
    // Media
    if (isset($data['media'])) {
        $media = $data['media'];

        // Delete old media if it was an attachment ID
        $old_media = get_post_meta($id, 'media', true);
        if ($old_media && is_numeric($old_media)) {
            wp_delete_attachment(intval($old_media), true);
        }

        $mediaType = get_post_meta($id, 'mediaType', true);
        if (!empty($media)) {
            if (strpos($media, 'data:') === 0) {
                $upload = save_base64_file_to_media_library($media, $id, $mediaType);
                if (!is_wp_error($upload)) {
                    update_post_meta($id, 'media', $upload);
                }
            } else {
                update_post_meta($id, 'media', esc_url_raw($media));
            }
        } else {
            delete_post_meta($id, 'media');
        }
    }

    update_post_meta($id, 'history', $history);

    return new WP_REST_Response(['message' => 'Lesson updated'], 200);
}
function cc_edit_lesson(WP_REST_Request $request) {
    $id = intval($request->get_param('id'));
    $post = get_post($id);
    if (!$post || $post->post_type !== 'lesson') return cc_return_error('Invalid lesson id', 404);

    $update = ['ID' => $id];
    if ($request->get_param('title') !== null) {
        $update['post_title'] = sanitize_text_field($request->get_param('title'));
    }
    if ($request->get_param('content') !== null) {
        $update['post_content'] = sanitize_textarea_field($request->get_param('content'));
    }
    wp_update_post($update);

    // Thumbnail clear or replace
    if ($request->get_param('thumbnail') === "") {
        $old = get_post_meta($id, 'thumbnail', true);
        if ($old && is_numeric($old)) wp_delete_attachment(intval($old), true);
        delete_post_meta($id, 'thumbnail');
    } elseif (!empty($_FILES['thumbnail'])) {
        $res = cc_handle_file_upload('thumbnail', $id, 'thumbnail');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    // Media clear or replace
    if ($request->get_param('media') === "") {
        $old = get_post_meta($id, 'media', true);
        if ($old && is_numeric($old)) wp_delete_attachment(intval($old), true);
        delete_post_meta($id, 'media');
    } elseif (!empty($_FILES['media'])) {
        $res = cc_handle_file_upload('media', $id, 'media');
        if (is_wp_error($res)) return cc_return_error($res->get_error_message());
    }

    // Meta fields
    if ($request->get_param('status') !== null) {
        update_post_meta($id, 'status', $request->get_param('status'));
    }
    if ($request->get_param('duration') !== null) {
        update_post_meta($id, 'duration', $request->get_param('duration'));
    }
    if ($request->get_param('live_link') !== null) {
        update_post_meta($id, 'live_link', $request->get_param('live_link') === "" ? "" : esc_url_raw($request->get_param('live_link')));
    }
    if ($request->get_param('scheduled_time') !== null) {
        update_post_meta($id, 'scheduled_time', $request->get_param('scheduled_time'));
    }

    return new WP_REST_Response(['message' => 'Lesson updated'], 200);
}

/**
 * Soft Delete Lesson
 * POST: /wp-json/custom-courses/v1/lesson/delete
 * body: { id }
 */
function cc_delete_lesson(WP_REST_Request $request)
{
    $data = $request->get_json_params();
    $id = intval(cc_get_param($data, 'id', 0));
    if (!$id) return cc_return_error('Missing lesson id', 400);

    $post = get_post($id);
    if (!$post || $post->post_type !== 'lesson') return cc_return_error('Invalid lesson id', 404);

    $history = get_post_meta($id, 'history', true) ?: [];
    $history[] = [
        'content' => $post->post_content,
        'timestamp' => current_time('mysql'),
    ];

    wp_update_post(['ID' => $id, 'post_content' => '[deleted]']);
    update_post_meta($id, 'history', $history);
    update_post_meta($id, 'deleted', true);

    return new WP_REST_Response(['message' => 'Lesson soft-deleted'], 200);
}

/**
 * Fetch Courses (optionally nested)
 * GET: /wp-json/custom-courses/v1/courses
 * params: nested=1 (include modules and lessons), show_deleted=1
 */
function cc_fetch_courses(WP_REST_Request $request)
{
    $params = $request->get_params();
    $nested = isset($params['nested']) && intval($params['nested']) === 1;
    $show_deleted = isset($params['show_deleted']) && intval($params['show_deleted']) === 1;

    $query_args = [
        'post_type' => 'course',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'DESC',
    ];

    if (!$show_deleted) {
        $query_args['meta_query'] = [
            [
                'key' => 'deleted',
                'compare' => '!=',
                'value' => '1',
            ],
        ];
    }

    $q = new WP_Query($query_args);

    $results = [];
    foreach ($q->posts as $post) {
        $course_id = $post->ID;

        // Resolve thumbnail URL (attachment or plain URL)
        $thumb = get_post_meta($course_id, 'thumbnail', true);
        if ($thumb && is_numeric($thumb)) {
            $thumb = wp_get_attachment_url(intval($thumb));
        }

        $course_obj = [
            'id'          => $course_id,
            'title'       => $post->post_title,
            'content'     => $post->post_content,
            'thumbnail'   => $thumb ?: get_the_post_thumbnail_url($course_id),
            'created_date' => get_post_meta($course_id, 'created_date', true),
            'rating'      => floatval(get_post_meta($course_id, 'rating', true)),
            'progress'    => intval(get_post_meta($course_id, 'progress', true)),
            'students'    => intval(get_post_meta($course_id, 'students', true)),
            'deleted'     => get_post_meta($course_id, 'deleted', true) ? true : false,
        ];

        if ($nested) {
            // Fetch modules for this course
            $modules_q = new WP_Query([
                'post_type'      => 'module',
                'posts_per_page' => -1,
                'orderby'        => 'date',
                'order'          => 'ASC',
                'meta_query'     => [
                    [
                        'key' => 'course_id',
                        'value' => $course_id,
                        'compare' => '=',
                    ],
                    [
                        'key' => 'deleted',
                        'compare' => '!=',
                        'value' => '1',
                    ],
                ],
            ]);

            $modules = [];
            foreach ($modules_q->posts as $module_post) {
                $module_id = $module_post->ID;

                // Resolve module thumbnail
                $mthumb = get_post_meta($module_id, 'thumbnail', true);
                if ($mthumb && is_numeric($mthumb)) {
                    $mthumb = wp_get_attachment_url(intval($mthumb));
                }

                $module_obj = [
                    'id'       => $module_id,
                    'parentId' => $course_id,
                    'title'    => $module_post->post_title,
                    'content'  => $module_post->post_content,
                    'thumbnail' => $mthumb ?: get_the_post_thumbnail_url($module_id),
                    'status'   => get_post_meta($module_id, 'status', true),
                    'deleted'  => get_post_meta($module_id, 'deleted', true) ? true : false,
                ];

                // Fetch lessons for this module
                $lessons_q = new WP_Query([
                    'post_type'      => 'lesson',
                    'posts_per_page' => -1,
                    'orderby'        => 'date',
                    'order'          => 'ASC',
                    'meta_query'     => [
                        [
                            'key' => 'module_id',
                            'value' => $module_id,
                            'compare' => '=',
                        ],
                        [
                            'key' => 'deleted',
                            'compare' => '!=',
                            'value' => '1',
                        ],
                    ],
                ]);

                $lessons = [];
                foreach ($lessons_q->posts as $lesson_post) {
                    $lesson_id = $lesson_post->ID;

                    // Thumbnail
                    $lthumb = get_post_meta($lesson_id, 'thumbnail', true);
                    if ($lthumb && is_numeric($lthumb)) {
                        $lthumb = wp_get_attachment_url(intval($lthumb));
                    }

                    // Media
                    $media = get_post_meta($lesson_id, 'media', true);
                    if ($media && is_numeric($media)) {
                        $media = wp_get_attachment_url(intval($media));
                    }

                    $lessons[] = [
                        'id'            => $lesson_id,
                        'parentId'      => $module_id,
                        'title'         => $lesson_post->post_title,
                        'content'       => $lesson_post->post_content,
                        'mediaType'     => get_post_meta($lesson_id, 'mediaType', true),
                        'thumbnail'     => $lthumb ?: get_the_post_thumbnail_url($lesson_id),
                        'media'         => $media,
                        'duration'      => get_post_meta($lesson_id, 'duration', true),
                        'liveLink'      => get_post_meta($lesson_id, 'liveLink', true),
                        'scheduledTime' => get_post_meta($lesson_id, 'scheduledTime', true),
                        'status'        => get_post_meta($lesson_id, 'status', true),
                        'history'       => get_post_meta($lesson_id, 'history', true) ?: [],
                        'deleted'       => get_post_meta($lesson_id, 'deleted', true) ? true : false,
                    ];
                }

                $module_obj['lessons'] = $lessons;
                $modules[] = $module_obj;
            }

            $course_obj['modules'] = $modules;
        }

        $results[] = $course_obj;
    }

    return new WP_REST_Response($results, 200);
}


/**
 * Fetch Modules (optionally by course)
 * GET: /wp-json/custom-courses/v1/modules?course_id=123
 */
function cc_fetch_modules(WP_REST_Request $request)
{
    $course_id = intval($request->get_param('course_id'));
    $show_deleted = intval($request->get_param('show_deleted')) === 1;

    $meta_query = [];
    if ($course_id) {
        $meta_query[] = [
            'key' => 'course_id',
            'value' => $course_id,
            'compare' => '='
        ];
    }
    if (!$show_deleted) {
        $meta_query[] = [
            'key' => 'deleted',
            'value' => '1',
            'compare' => '!='
        ];
    }

    $args = [
        'post_type' => 'module',
        'posts_per_page' => -1,
        'meta_query' => $meta_query,
    ];

    $q = new WP_Query($args);

    $results = array_map(function ($post) {
        $thumb = get_post_meta($post->ID, 'thumbnail', true);
        if ($thumb && is_numeric($thumb)) {
            $thumb = wp_get_attachment_url(intval($thumb));
        }

        return [
            'id'        => $post->ID,
            'title'     => $post->post_title,
            'content'   => $post->post_content,
            'course_id' => get_post_meta($post->ID, 'course_id', true),
            'thumbnail' => $thumb ?: get_the_post_thumbnail_url($post->ID),
            'status'    => get_post_meta($post->ID, 'status', true),
            'deleted'   => get_post_meta($post->ID, 'deleted', true) ? true : false,
        ];
    }, $q->posts);

    return new WP_REST_Response($results, 200);
}

/**
 * Fetch Lessons (optionally by module)
 * GET: /wp-json/custom-courses/v1/lessons?module_id=123
 */
function cc_fetch_lessons(WP_REST_Request $request)
{
    $module_id = intval($request->get_param('module_id'));
    $show_deleted = intval($request->get_param('show_deleted')) === 1;

    $meta_query = [];
    if ($module_id) {
        $meta_query[] = [
            'key' => 'module_id',
            'value' => $module_id,
            'compare' => '='
        ];
    }
    if (!$show_deleted) {
        $meta_query[] = [
            'key' => 'deleted',
            'value' => '1',
            'compare' => '!='
        ];
    }

    $args = [
        'post_type' => 'lesson',
        'posts_per_page' => -1,
        'meta_query' => $meta_query,
    ];

    $q = new WP_Query($args);

    $results = array_map(function ($post) {
        // Thumbnail
        $thumb = get_post_meta($post->ID, 'thumbnail', true);
        if ($thumb && is_numeric($thumb)) {
            $thumb = wp_get_attachment_url(intval($thumb));
        }

        // Media
        $media = get_post_meta($post->ID, 'media', true);
        if ($media && is_numeric($media)) {
            $media = wp_get_attachment_url(intval($media));
        }

        return [
            'id'            => $post->ID,
            'title'         => $post->post_title,
            'content'       => $post->post_content,
            'module_id'     => get_post_meta($post->ID, 'module_id', true),
            'mediaType'     => get_post_meta($post->ID, 'mediaType', true),
            'thumbnail'     => $thumb ?: get_the_post_thumbnail_url($post->ID),
            'media'         => $media,
            'duration'      => get_post_meta($post->ID, 'duration', true),
            'liveLink'      => get_post_meta($post->ID, 'liveLink', true),
            'scheduledTime' => get_post_meta($post->ID, 'scheduledTime', true),
            'status'        => get_post_meta($post->ID, 'status', true),
            'history'       => get_post_meta($post->ID, 'history', true) ?: [],
            'deleted'       => get_post_meta($post->ID, 'deleted', true) ? true : false,
        ];
    }, $q->posts);

    return new WP_REST_Response($results, 200);
}

/**
 * Register REST routes & rest_fields exposures
 */
add_action('rest_api_init', function () {
    // course
    register_rest_route('custom-courses/v1', '/course/create', [
        'methods' => 'POST',
        'callback' => 'cc_create_course',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/course/edit', [
        'methods' => 'POST',
        'callback' => 'cc_edit_course',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/course/delete', [
        'methods' => 'POST',
        'callback' => 'cc_delete_course',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/courses', [
        'methods' => 'GET',
        'callback' => 'cc_fetch_courses',
        'permission_callback' => '__return_true',
    ]);

    // module
    register_rest_route('custom-courses/v1', '/module/create', [
        'methods' => 'POST',
        'callback' => 'cc_create_module',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/module/edit', [
        'methods' => 'POST',
        'callback' => 'cc_edit_module',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/module/delete', [
        'methods' => 'POST',
        'callback' => 'cc_delete_module',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/modules', [
        'methods' => 'GET',
        'callback' => 'cc_fetch_modules',
        'permission_callback' => '__return_true',
    ]);

    // lesson
    register_rest_route('custom-courses/v1', '/lesson/create', [
        'methods' => 'POST',
        'callback' => 'cc_create_lesson',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/lesson/edit', [
        'methods' => 'POST',
        'callback' => 'cc_edit_lesson',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/lesson/delete', [
        'methods' => 'POST',
        'callback' => 'cc_delete_lesson',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('custom-courses/v1', '/lessons', [
        'methods' => 'GET',
        'callback' => 'cc_fetch_lessons',
        'permission_callback' => '__return_true',
    ]);
});
