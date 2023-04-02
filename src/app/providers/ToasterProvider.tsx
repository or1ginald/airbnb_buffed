"use client";

import { FC } from "react";

import { Toaster } from "react-hot-toast";

// Workaround bc it needs at least 1 parent
export const ToasterProvider: FC = () => <Toaster />;
