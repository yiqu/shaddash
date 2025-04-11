import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
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
  getCount: () => number;
};

type UserCounterPersist = PersistOptions<
  CounterState,
  Omit<CounterState, 'addUser' | 'removeUser' | 'clearUsers' | 'getSortedUsersByName'>
>;

const userCounterUserStore = create<CounterState>()(
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
        return get().users;
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

export default userCounterUserStore;
