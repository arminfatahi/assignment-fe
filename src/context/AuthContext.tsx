import Cookies from "js-cookie";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { User } from "@/lib/Types";
import { addUser, removeUser, readUser } from "@/lib/HandleUser";

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

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await readUser();
      if (userData && userData.userID) {
        setUser(userData);
        Cookies.set("user", JSON.stringify(userData), { expires: 7 });
      } else {
        Cookies.remove("user");
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "a@a.a" && password === "abcd") {
      const newUser: User = {
        userID: "1",
        name: "salam",
        email,
        role: "user",
        avatarURL: "avatar",
      };

      const success = await addUser(newUser);
      if (success) {
        setUser(newUser);
        Cookies.set("user", JSON.stringify(newUser), { expires: 7 });
        return true;
      }
      return false;
    } else {
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    const success = await removeUser();
    if (success) {
      setUser(null);
      Cookies.remove("user");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
