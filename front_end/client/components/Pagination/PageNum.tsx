interface PropsType {
	page: number | string;
	currentPage: number;
}

export default function PageBtn(props: PropsType) {
	const { page, currentPage } = props;

	const activePage = "bg-main ";
	const inActiveage =
		"bg-none border-[1px] p-2 flex justify-center items-center box-content min-w-[9px] h-5 hover:opacity-70";
	return (
		<div
			className={page === currentPage ? activePage + inActiveage : inActiveage}>
			{page}
		</div>
	);
}
