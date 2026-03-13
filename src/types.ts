export interface LeadFormData {
  name: string;
  phone: string;
  educationLevel: string;
  desiredCourse: string;
  observations: string;
}

export interface Testimonial {
  id: number;
  name: string;
  result: string;
  text: string;
  avatar?: string;
}

export interface MethodStep {
  title: string;
  description: string;
  icon: string;
}
