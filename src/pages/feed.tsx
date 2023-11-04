import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Publication, { PublicationProps } from "@/modules/feed/Publication";
import { useQuery } from "@tanstack/react-query";
import ModalComments from "@/modules/feed/ModalComments";
import Header from "@/components/Header";
import { http } from "@/utils";

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

  const { data: resp } = useQuery({
    queryKey: ["Feed"],
    queryFn: async () => {
      const user = JSON.parse(localStorage.getItem("userInfo") ?? "");
      const resp = await http.get(`/post/${user.id}`)
      return resp;
    },
  });

  const onSearch = () => {
    //Pedir
  };

  return (
    <section className="flex flex-col h-full items-center">
      <Header className="my-4" />
      <div className="w-[80%] max-w-md">
        <form onSubmit={handleSubmit(onSearch)} className="flex flex-col gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered rounded-lg w-full"
              {...register("searchText", {
                required: true,
                minLength: 3,
              })}
            />
          </div>
        </form>
      </div>
      <section className="flex flex-col gap-4 mt-10">
        {resp?.data?.map((publi:any) => (
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
