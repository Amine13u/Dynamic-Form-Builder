import React, { FunctionComponent } from "react";

export const Menu: FunctionComponent = () => {
  return (
    <aside className="h-full">
      <nav className="mt-10 ml-10">
        <ul className="flex flex-col space-y-5">
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Text Field
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Text Area
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Chekbox
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Select Input
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Radio Button
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Email
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Password
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Number
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Date
          </li>
          <li className="font-semibold text-lg cursor-pointer hover:text-neutral-600">
            Button
          </li>
        </ul>
      </nav>
    </aside>
  );
};
