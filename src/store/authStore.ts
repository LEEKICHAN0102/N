import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/libs/firebase";

type AuthState = {
  isLogin: boolean;
  loading: boolean;
  setIsLogin: (isLogin: boolean) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  isLogin: false,
  loading: true,
  setIsLogin: (isLogin) => set({ isLogin }),
  setLoading: (loading) => set({ loading }),
}));

export const syncAuthState = () => {
  const setIsLogin = useAuthStore.getState().setIsLogin;
  const setLoading = useAuthStore.getState().setLoading;

  setLoading(true);
  onAuthStateChanged(auth, (user) => {
    setIsLogin(!!user);
    setLoading(false);
  });
};
