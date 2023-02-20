export function formatDate(dateString: string | Date): string {
	const date = new Date(dateString);

	return date.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}
