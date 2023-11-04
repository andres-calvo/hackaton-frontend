import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Publication, { PublicationProps } from "@/modules/feed/Publication";
import { useQuery } from "@tanstack/react-query";
import ModalComments from "@/modules/feed/ModalComments";

interface FormInputs {
  searchText: string;
}

const FeedPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      searchText: "",
    },
  });
  const [currentPublication, setCurrentPublication] = useState<null | number>(
    null
  );
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  const { data: publications } = useQuery<
    Omit<PublicationProps, "handleShowModal">[]
  >({
    queryKey: ["Feed"],
    queryFn: () => {
      return [
        {
          id: 2313,
          isImage: true,
          media:
            "https://www.nextinsurance.com/wp-content/uploads/2020/04/April_2020_5-802x454.jpg",
          userName: "AndresCalvo",
        },
        {
          id: 231333,
          isImage: true,
          media:
            "https://www.nextinsurance.com/wp-content/uploads/2020/04/April_2020_5-802x454.jpg",
          userName: "AndresCalvo",
        },
      ];
    },
  });

  const onSearch = () => {
    //Pedir
  };

  return (
    <section className="flex flex-col h-full items-center ">
      <header className="flex justify-between max-w-3xl w-full">
        {/* Logo */}
        {/* Trainer SVG */}
      </header>
      <div>
        <form onSubmit={handleSubmit(onSearch)} className="flex flex-col gap-4">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered rounded-lg  w-full max-w-xs"
              {...register("searchText", {
                required: true,
                minLength: 3,
              })}
            />
          </div>
        </form>
      </div>
      <section className="flex flex-col gap-4 mt-10">
        {publications?.map((publi) => (
          <Publication
            {...publi}
            key={publi.id}
            handleShowModal={() => {
              setCurrentPublication(publi.id);
              setShowCommentsModal(true);
            }}
          />
        ))}
      </section>
      {showCommentsModal && currentPublication && (
        <ModalComments
          closeModal={() => setShowCommentsModal(false)}
          isOpen={showCommentsModal}
          publicationId={currentPublication}
        />
      )}
    </section>
  );
};

export default FeedPage;
