import { ContactType } from "@/util/types";

interface PropsType {
	contact: ContactType | undefined;
}

export default function ContactInfo({ contact }: PropsType) {
	return (
		<div className="flex md:flex-col">
			<div className="flex gap-2">
				<span>Утас:</span>
				{contact?.phonenumber}
			</div>
			{/* <div className="flex">{contact.social}</div> */}
		</div>
	);
}
