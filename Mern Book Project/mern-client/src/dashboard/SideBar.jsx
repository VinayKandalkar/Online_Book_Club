import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiSupport,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import userImg from "../assets/profile.jpg"

export const SideBar = () => {
  return (
    <Sidebar aria-Label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            <p>Upload Book</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            <p>Manage Books</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} I>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            <p>Log Out</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Upgrade to Pro</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            <p>Documentation</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport}>
            <p>Help</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
