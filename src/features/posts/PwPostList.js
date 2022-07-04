import { useEffect } from "react";
import { LinearProgress, Text } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "./postsSlice";
import PwCard from '../../components/PwCard';

export default function PwPostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(state => state.posts.status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <>
      {status === 'loading' && (
        <>
          <LinearProgress />
          <Text>Cargando...</Text>
        </>
      )}
      {posts.map(item => <PwCard key={item.title} {...item} />)}
    </>
  );
}