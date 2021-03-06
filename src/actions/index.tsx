import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch:any, getState:any) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach((id:any) => dispatch(fetchUser(id)))
        .value()
};

export const fetchPosts = () => async (dispatch:any) => {
        const res = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: res.data });
    };

export const fetchUser = (id:any) => async (dispatch:any) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: res.data });
};


