import React from 'react'

const AlertDialog = ({ isOpen, onClose, data }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm" onClick={() => onClose()}>
      <div className="p-4 w-96 h-96 flex flex-col justify-between bg-white rounded-lg border shadow-sm" onClick={(e) => e.stopPropagation()}>

        <h2 className='text-base text-center font-semibold text-[#476581]'>Pipeline Summary</h2>

        {data && data.num_nodes !== 0 ? (
          <div className='w-full grid gap-2 text-sm text-gray-500'>
            <div className='flex gap-8 justify-center items-center border-b'>
              <div className='flex items-center gap-1'>
                <span>Total Nodes :</span>
                <span className='p-2 text-lg'>{data.num_nodes}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span>Total Edges :</span>
                <span className='p-2 text-lg'>{data.num_edges}</span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <span className='p-2'>Pipeline is{data.is_dag === true ? " " : <span className='font-bold'> NOT </span>}a Directed Acyclic Graph (DAG)</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <img src="loading.gif" className='w-auto h-16' alt="Loading" />
          </div>
        )}

        <button className='p-2 w-full rounded-lg shadow-sm text-center text-white font-semibold bg-[#6366f1] hover:bg-[#4f46e5]' onClick={() => onClose()}>Close</button>

      </div>
    </div>
  )
}

export default AlertDialog