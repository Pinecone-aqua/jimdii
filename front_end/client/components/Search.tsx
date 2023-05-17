import { useRouter } from "next/router";

export default function Search({ pathname }: { pathname: string }) {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(e: any) {
    e.preventDefault();
    if (e.target.search.value.trim() === "") return;
    router.push({
      pathname,
      query: { page: 1, ...router.query, search: e.target.search.value.trim() },
    });
  }
  return (
    <form
      onSubmit={submitHandler}
      className="w-full md:w-1/2 flex items-center"
    >
      <input
        type="text"
        name="search"
        className="w-full bg-black border border-main text-main h-10 focus:outline-0 focus:border-none"
      />
      <button
        type="submit"
        className="bg-main p-2 px-5 h-10 border-2 border-main flex justify-center items-center hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}
