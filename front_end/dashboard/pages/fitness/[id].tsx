import { useRouter } from "next/router";

export default function EditFitness() {
  const router = useRouter();

  return <>edit {router.query.id}</>;
}
