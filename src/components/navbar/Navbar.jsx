'use client'
import React, { useEffect, useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem , Dropdown, DropdownMenu} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";

export default function NavBar() {
   
   const [searchData, setSearchData] = useState();
   const [searchValue, setSearchValue] = useState();
  //  console.log("Search value",searchData) ;
  //  console.log("Search value2",searchData?.length ) ;

   useEffect(  () =>{
       
    const fetchData = async () => {
      if(searchValue?.length > 0)
      {
        const data = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
        const response = await data.json();
        setSearchData(response.products);
        // console.log(" Inside use effect", response.products);

      }
      else
      {
        setSearchData('');
      }
      

    }

    fetchData();

     
     

   }, [searchValue])

  return (
  
         <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
            <Link color="foreground" href="/">
              Products
            </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem  isActive >
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link href="#" aria-current="page" color="secondary">
              About Us
            </Link>
          </NavbarItem>

        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className=" py-1 px-4 bg-sky-300 rounded-lg text-[14px] ">Search</button>
        <>
         {
          searchData?.length > 0 && <Dropdown className=' absolute top-8 right-0' >
            
          <DropdownMenu aria-label="Profile Actions" variant="flat" className='max-h-[200px] md:max-h-[300px] overflow-auto'>
            {
              searchData.map((item) => {
                return (
                  <DropdownItem key={item.id} className="border-b py-1">
                    <Link href={`/product_details/${item.id}`} className="block w-full h-full text-gray-800 hover:text-blue-500">
                      {item.title}
                    </Link>
                  </DropdownItem>
                )
              })
            }
      
          
           
          </DropdownMenu>
        </Dropdown>
         }
        </>
      </NavbarContent>
    </Navbar>
      
   
  )
}
