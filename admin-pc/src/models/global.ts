import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
  count: number;
}

export interface IndexModelType {
  namespace: 'global';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    changeCount: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'global',

  state: {
    name: 'hhhhhh',
    count: 0,
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    changeCount(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default IndexModel;