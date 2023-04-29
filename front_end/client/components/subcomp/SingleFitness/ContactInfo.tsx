import { ContactType } from "@/util/types";

interface PropsType {
	contact: ContactType;
}

export default function ContactInfo({ contact }: PropsType) {
	return (
		<div className="flex md:flex-col">
			<div className="flex gap-2">
				<span>Утас:</span>
				{contact.phoneNumber}
			</div>
			{/* <div className="flex">{contact.social}</div> */}
		</div>
	);
}
