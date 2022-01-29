import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

type ActiveLinkProps = {
  children: React.ReactElement;
} & React.ComponentProps<typeof Link>;

export function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (
    asPath.startsWith(String(props.href)) ||
    asPath.startsWith(String(props.as))
  ) {
    isActive = true;
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
