import { FitnessProp, FitnessType } from "@/utils/types";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function EditFitness({ data: data }: { data: FitnessType }) {
	console.log(data);

	return <>{data.name}</>;
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
	const res = await axios.get("http://localhost:7003/fitness/id");
	const paths = await res.data.map((id: { _id: string }) => ({
		params: { id: id._id },
	}));
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps<FitnessProp> = async ({
	params,
}: GetStaticPropsContext) => {
	const { data } = await axios.get(
		`http://localhost:7003/fitness/getfitness${params?.id}`
	);
	return {
		props: {
			data: data,
		},
	};
};
