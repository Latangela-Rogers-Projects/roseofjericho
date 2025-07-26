export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    imagePlaceHolder: string;
    imageUrl: string;
    category: string;
    url: string;
  }
  
  export interface CourseModalProps {
    course: Course | null;
    isOpen: boolean;
    onClose: () => void;
  }