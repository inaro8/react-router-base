import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

// どのページにいるか判定する場合はNavLinkをつかう
const isCurrent = ({ isActive }) => {
	return isActive ? 'current' : undefined;
}

export default () => {
	return (
		<>
			<ul>
				<li><NavLink end className={isCurrent} to="/">トップ</NavLink></li>{/* ルートには末尾のみ一致させるためにendをつける */}
				<li><NavLink className={isCurrent} to="/hello">Hello</NavLink></li>
				<li><NavLink className={isCurrent} to="/article/13">記事13</NavLink></li>
				<li><NavLink className={isCurrent} to="/article/108">記事108</NavLink></li>
				<li><NavLink className={isCurrent} to="/search/react/router">検索結果</NavLink></li>
			</ul>
			<hr />
			<Outlet />
		</>
	)
}
