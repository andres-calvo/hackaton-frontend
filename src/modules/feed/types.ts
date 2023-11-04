import { ModalProps } from "@/components/types";

export interface CommentProps {
    id:string;
    name: string;
    commentary: string;
  }
  
  
  export interface CommentListProps {
    comments: Comment[];
  }

export type ModalCommentsProps = Omit<ModalProps,"children"> & {
    publicationId:number
}