import Modal from "@/components/Modal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ModalCommentsProps, CommentProps } from "./types";
import Comment from "./Comment";
import { useRef } from "react";
import { http } from "@/utils";

const ModalComments: React.FC<ModalCommentsProps> = ({
  isOpen,
  closeModal,
  publicationId,
}) => {
  const { register, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      newComment: "",
    },
  });
  const queryClient = useQueryClient();
  const listRef = useRef<HTMLDivElement>(null);
  const { data } = useQuery<CommentProps[]>({
    queryKey: ["ModalComments", publicationId],
    queryFn: async () => {
      const resp = await http.get(`/comment/${publicationId}`);
      return resp.data;
    },
  });

  const handleNewComment = ({ newComment }: { newComment: string }) => {
    const user = JSON.parse(localStorage.getItem("userInfo") ?? "");

    http
      .post("/comment", {
        commentary: newComment,
        created_by: user.id,
        post_id: publicationId,
      })
      .then(() => {
        queryClient.invalidateQueries({
          queryKey: ["ModalComments", publicationId],
        });
      });
  };

  // Manejador de eventos para la tecla Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleNewComment({ newComment: getValues().newComment });
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mt-4">
        <ul className="max-h-52 h-full overflow-auto mt-4">
          {data?.map((el) => (
            <Comment
              id={el.id}
              name={el.name}
              commentary={el.commentary}
              key={el.id}
            />
          ))}
          <div ref={listRef}></div>
        </ul>

        <input
          type="text"
          placeholder="Escribe un comentario"
          className="input input-bordered w-full max-w-xs mt-4"
          {...register("newComment", {
            required: true,
          })}
          onKeyDown={handleKeyDown}
        />
      </div>
    </Modal>
  );
};

export default ModalComments;
