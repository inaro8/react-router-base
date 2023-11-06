import { useParams } from "react-router-dom"

export default prop => {

	// ルートパラメータを取得
	const params = useParams();

	console.log(params);

	return (
		<div>
			<p>キーワードは{params['*']}です</p>{/* *をうけとるためにはブラケットをつかう */}
		</div>
	)
}
