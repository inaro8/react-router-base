import { useNavigate } from "react-router-dom";

export default () => {

	// ルート間のリンクはuseNavigateをつかう
	const navigate = useNavigate();
	const onClick = () => {
		navigate('/');
	}

	return (
		<div>
			<p>Hello</p>
			<button onClick={onClick}>トップへ移動</button>
		</div>
	)
}
