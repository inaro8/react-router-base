import ReactDOM from 'react-dom/client';

// React Routerに関わる関数をインポート
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom';

// ルーティングで利用するコンポーネントをインポート
import App from './App';
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';
import MyError from './MyError';
import MySearch from './MySearch';
import NotFound from './NotFound';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>{/* 親 */}
			<Route index element={<MyTop />} />{/* 親ルートと同じパスなので、path="/" ではなくindexにするのが普通 */}
			<Route path="hello" element={<MyHello />} />
			<Route path="*" element={<NotFound />} />

			{/* ルートパラメータを含んだルート(複数のパラメータを設定することも可能) */}
			<Route path="article/:id" element={<MyArticle />} errorElement={<MyError />} />

			{/* 可変長のパラメータも設定可能 */}
			<Route path="search/*" element={<MySearch />} />

		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<RouterProvider router={router} />
);
