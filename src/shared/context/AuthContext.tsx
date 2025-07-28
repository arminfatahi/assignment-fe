import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useRouter } from "next/navigation";
import { UserService } from "@/shared/api";
import { User, UserWithPass } from "@/shared/model";
import {
  getUserFromCookie,
  setUserCookie,
  removeUserCookie,
} from "@/shared/lib/auth/persistUser";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await UserService.getUser();

      const cookieUser = getUserFromCookie();
      if (cookieUser) {
        setUser(cookieUser);
      }

      if (userData && userData.userID) {
        setUser(userData);
        setUserCookie(userData);
      } else {
        removeUserCookie();
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const newUser: UserWithPass = {
      userID: "1",
      name: "salam",
      email,
      password: password,
      role: "user",
      avatarURL: "images/avatar/profile.jpg",
    };

    const success = await UserService.addUser(newUser);
    if (success) {
      setUser(newUser);
      setUserCookie(newUser);
      router.push("/dashboard");
      return true;
    }
    return false;
  };

  const logout = async (): Promise<void> => {
    const success = await UserService.removeUser();
    if (success) {
      setUser(null);
      removeUserCookie();
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
