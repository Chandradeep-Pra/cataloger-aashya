import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft, SlashIcon } from "lucide-react";

export default function ItemPage({
  params,
}: {
  params: { categorySlug: string; itemId: string };
}) {
  const { categorySlug, itemId } = params;

  return (
    <div className="p-6 space-y-6 ">
        <div className="flex items-center">

        
        <ChevronLeft className="border boreder border-textPrimary rounded-full p-1" size={32} />
      {/* ✅ Breadcrumb */}
      <Breadcrumb className="font-bold pl-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="w-4 h-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${categorySlug}`}>
              {categorySlug}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon className="w-4 h-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" aria-current="page">
              Item {itemId}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
</div>
      {/* Item content */}
      {/* <div>
        <h1 className="text-2xl font-bold">Item {itemId}</h1>
        <p className="text-muted-foreground capitalize">
          Category: {categorySlug}
        </p>
      </div> */}
      <div>
        
      </div>
    </div>
  );
}
