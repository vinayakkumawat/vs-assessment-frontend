import { PipelineToolbar } from '@/components/PipelineToolbar';
import { PipelineUI } from '@/components/PipelineUI';
import { SubmitButton } from '@/components/SubmitButton';

import { BsFileCode } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="m-2 rounded-lg border shadow-sm">

      <div className="p-2 flex justify-between items-center border shadow-sm">
        <div className="flex items-center gap-1">
          <BsFileCode className="w-4 h-4" />
          <span className="text-sm font-semibold">Frontent Assessment</span>
          <IoIosArrowForward className="w-4 h-4" />
          <span className="text-sm font-semibold">Vinayak Kumawat</span>
        </div>
        <SubmitButton />
      </div>

      <div className="p-4 flex justify-center items-center border shadow-sm">
        <PipelineToolbar />
      </div>
      <PipelineUI />
    </div>
  );
}
