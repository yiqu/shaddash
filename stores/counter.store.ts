import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { StoreApi, UseBoundStore } from 'zustand';
import { persist, PersistOptions, createJSONStorage } from 'zustand/middleware';

type User = {
  id: number;
  name: string;
  email: string;
  dateAdded: number;
};

type CounterState = {
  count: number;
  users: User[];

  // Actions
  addUser: (user: Omit<User, 'dateAdded'>) => void;
  removeUser: (id: number) => void;
  clearUsers: () => void;

  incrementCount: () => void;
  decrementCount: () => void;
  setCount: (count: number) => void;

  // Selectors
  getSortedUsersByName: () => User[];
  getSortedUsersByName2: () => User[];
  getCount: () => number;
};

type UserCounterPersist = PersistOptions<
  CounterState,
  Omit<CounterState, 'addUser' | 'removeUser' | 'clearUsers' | 'getSortedUsersByName'>
>;

const userCounterUserStoreBase = create<CounterState>()(
  // devtools(
  persist(
    (set, get) => ({
      users: [] as User[],
      count: 0,
      addUser: (user: Omit<User, 'dateAdded'>) => {
        set(
          (state) => {
            const userBeingAdded = {
              ...user,
              dateAdded: Date.now(),
            };
            return {
              users: [...state.users, userBeingAdded],
            };
          },
          // undefined,
          // 'addUser',
        );
      },
      removeUser: (id: number) => {},
      clearUsers: () => {},

      getSortedUsersByName: () => {
        const u = get().users;
        const uSorted = u.toSorted((a, b) => (a.name < b.name ? 1 : -1));
        return [...uSorted];
      },

      getSortedUsersByName2: () => {
        const u = get().users;
        return u;
      },

      incrementCount: () => {
        set(
          (state) => {
            return {
              count: state.count + 1,
            };
          },
          // undefined,
          //  'incrementCount',
        );
      },

      decrementCount: () => {
        set(
          (state) => {
            return {
              count: state.count - 1,
            };
          },
          //  undefined,
          //  'decrementCount',
        );
      },

      setCount: (countToSet: number) => {
        set(
          {
            count: countToSet,
          },
          //  undefined,
          //  'setCount',
        );
      },

      getCount: () => {
        return get().count;
      },
    }),
    {
      name: 'user-counter-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        count: state.count,
      }),
      // skipHydration: true,
    } as UserCounterPersist,
  ),
  //),
);

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const userCounterUserStore = createSelectors(userCounterUserStoreBase);

export default userCounterUserStore;
