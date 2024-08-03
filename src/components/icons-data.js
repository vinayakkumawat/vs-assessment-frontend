import { MdInput, MdOutlineOutput, MdModelTraining, MdOutlineTextSnippet } from "react-icons/md";
import { TbMathPi } from "react-icons/tb";
import { RiEqualizerLine } from "react-icons/ri";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";

export const icons = {
    customInput: <MdInput className={`w-6 h-6`} />,
    input: <MdInput className={`w-6 h-6`} />,
    llm: <MdModelTraining className={`w-6 h-6`} />,
    LLM: <MdModelTraining className={`w-6 h-6`} />,
    customOutput: <MdOutlineOutput className={`w-6 h-6`} />,
    output: <MdOutlineOutput className={`w-6 h-6`} />,
    text: <MdOutlineTextSnippet className={`w-6 h-6`} />,
    calculation: <TbMathPi className={`w-6 h-6`} />,
    conditional: <RiEqualizerLine className={`w-6 h-6`} />,
    apiRequest: <LuGitPullRequestDraft className={`w-6 h-6`} />,
    database: <BsDatabaseFillAdd className={`w-6 h-6`} />,
    log: <FaRegFileLines className={`w-6 h-6`} />,
};