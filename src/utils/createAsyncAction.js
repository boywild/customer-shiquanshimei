function createAsyncAction(name, callback, meta = {}) {
    if (typeof callback !== 'function') {
        throw new Error('[createAsyncAction] callback should be a function');
    }

    return (dispatch) => {
        dispatch({
            meta,
            type: `${name}_REQUEST`
        });

        try {
            return callback()
                .then((value) => {
                    const action = {
                        meta,
                        type: `${name}_SUCCESS`,
                        payload: (() => {
                            let result = null;
                            if (name === 'APP_LOGIN') {
                                const data = value.admin ? value.admin : value.user;
                                result = {
                                    ...data,
                                    authorities: value.admin ? 'admin' : 'user'
                                };
                            } else {
                                result = value.data;
                            }
                            return result;
                        })()
                    };

                    dispatch(action);
                    return action;
                })
                .catch((err) => {
                    const action = {
                        meta,
                        type: `${name}_ERROR`,
                        payload: err,
                        error: true
                    };

                    dispatch(action);
                    return action;
                });
        } catch (err) {
            const action = {
                meta,
                type: `${name}_ERROR`,
                payload: err,
                error: true
            };

            dispatch(action);
            return Promise.resolve(action);
        }
    };
}

export default createAsyncAction;
