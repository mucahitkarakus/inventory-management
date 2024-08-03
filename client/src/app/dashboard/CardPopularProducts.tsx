import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../(components)/Rating/index";
import Image from "next/image";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            <div
              className="flex items-center justify-between gap-3 px-5 py-7 border-b"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-lg w-14 h-14"
                />
                <div className="flex flex-col justify-between gap-1">
                  <div className="font-bold text-gray-700">
                    Ipad
                  </div>
                  <div className="flex text-sm items-center">
                    <span className="font-bold text-blue-500 text-xs">
                      $12700
                    </span>
                    <span className="mx-2">|</span>
                    <Rating rating={3 || 0} />
                  </div>
                </div>
              </div>

              <div className="text-xs flex items-center">
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                100k Sold
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-3 px-5 py-7 border-b"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-lg w-14 h-14"
                />
                <div className="flex flex-col justify-between gap-1">
                  <div className="font-bold text-gray-700">
                    Samsung
                  </div>
                  <div className="flex text-sm items-center">
                    <span className="font-bold text-blue-500 text-xs">
                      $18999
                    </span>
                    <span className="mx-2">|</span>
                    <Rating rating={4 || 0} />
                  </div>
                </div>
              </div>

              <div className="text-xs flex items-center">
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                243k Sold
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-3 px-5 py-7 border-b"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://picsum.photos/200/300/?blur"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-lg w-14 h-14"
                />
                <div className="flex flex-col justify-between gap-1">
                  <div className="font-bold text-gray-700">
                    Iphone
                  </div>
                  <div className="flex text-sm items-center">
                    <span className="font-bold text-blue-500 text-xs">
                      $19999
                    </span>
                    <span className="mx-2">|</span>
                    <Rating rating={4 || 0} />
                  </div>
                </div>
              </div>

              <div className="text-xs flex items-center">
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                598k Sold
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-3 px-5 py-7 border-b"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://picsum.photos/200/300"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-lg w-14 h-14"
                />
                <div className="flex flex-col justify-between gap-1">
                  <div className="font-bold text-gray-700">
                    Huawei
                  </div>
                  <div className="flex text-sm items-center">
                    <span className="font-bold text-blue-500 text-xs">
                      $11123
                    </span>
                    <span className="mx-2">|</span>
                    <Rating rating={2 || 0} />
                  </div>
                </div>
              </div>

              <div className="text-xs flex items-center">
                <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                167k Sold
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
