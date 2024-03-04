import { routes } from "@app/lib";
import { HomeLink } from "@app/components";

export const HomeNav = () => {
  return (
    <nav className="flex flex-col lg:flex-row">
      {routes.map((r, index) => (
        <HomeLink delay={index * 1000} text={r} href={"/" + r} key={r} />
      ))}
    </nav>
  );
};
