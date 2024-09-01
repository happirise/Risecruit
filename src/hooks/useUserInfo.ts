import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserInfo = {
  id: number;
  name: string;
  email: string;
};

type UserInfoState = {
  userInfo: UserInfo;
  isLoggedIn: boolean;
};

type UserInfoActions = {
  setUserInfo: (userInfo: UserInfo) => void;
  deleteUserInfo: () => void;
};

const DEFAULT_USER_INFO: UserInfo = {
  id: 0,
  name: '',
  email: '',
};

const useUserInfo = create<UserInfoState & UserInfoActions>()(
  persist<UserInfoState & UserInfoActions>(
    (set) => ({
      userInfo: DEFAULT_USER_INFO,
      isLoggedIn: false,
      setUserInfo: (userInfo) => set({ userInfo, isLoggedIn: true }),
      deleteUserInfo: () =>
        set({ userInfo: DEFAULT_USER_INFO, isLoggedIn: false }),
    }),
    {
      name: 'risecruit-user-info-storage',
    },
  ),
);

export default useUserInfo;
