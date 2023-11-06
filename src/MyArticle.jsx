import { useParams } from "react-router-dom"

export default () => {

	// ルートパラメータを取得
	const { id } = useParams();

	if (id <= 0 || id >= 1000) {
		throw new Error('idの値が不正です');
	}

	return (
		<div>
			<p>No.{id}の記事です</p>
		</div>
	)
}
