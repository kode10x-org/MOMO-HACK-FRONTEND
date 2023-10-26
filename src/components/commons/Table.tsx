import React from "react";

const Table = () => {
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg bg-white'>
			<table className='w-full text-sm text-left text-gray-500 bg-white dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-all-search'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Recipents
						</th>
						<th scope='col' className='px-6 py-3'>
							Status
						</th>
						<th scope='col' className='px-6 py-3'>
							PaymentID
						</th>
						<th scope='col' className='px-6 py-3'>
							Amount
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-white border-b  hover:text-white  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</td>
						<th
							scope='row'
							className='px-6 py-4 font-bold  whitespace-nowrap '>
							12/10/23 12pm
						</th>
						<td className='px-6 py-4'>Gideon Ekeke</td>
						<td className='px-6 py-4 text-[#22c55e]'>Sent</td>
						<td className='px-6 py-4 text-[#039ccd]'>538385738583</td>
						<td className='px-6 py-4 text-black'>30,000</td>
					</tr>

					<tr
						className='bg-white border-b hover:text-white  dark:border-gray-700 
hover:bg-gray-50 dark:hover:bg-gray-600 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
rounded focus:ring-blue-500 dark:focus:ring-blue-600 
dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 
focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</td>
						<th
							scope='row'
							className='px-6 py-4 font-bold  whitespace-nowrap '>
							12/10/23 12pm
						</th>
						<td className='px-6 py-4'>Gideon Ekeke</td>
						<td className='px-6 py-4 text-[#22c55e]'>Sent</td>
						<td className='px-6 py-4 text-[#039ccd]'>538385738583</td>
						<td className='px-6 py-4 text-black'>30,000</td>
					</tr>

					<tr
						className='bg-white border-b hover:text-white  dark:border-gray-700 
hover:bg-gray-50 dark:hover:bg-gray-600 '>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<input
									id='checkbox-table-search-1'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
rounded focus:ring-blue-500 dark:focus:ring-blue-600 
dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 
focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label className='sr-only'>checkbox</label>
							</div>
						</td>
						<th
							scope='row'
							className='px-6 py-4 font-bold  whitespace-nowrap '>
							12/10/23 12pm
						</th>
						<td className='px-6 py-4'>Gideon Ekeke</td>
						<td className='px-6 py-4 text-[#22c55e]'>Sent</td>
						<td className='px-6 py-4 text-[#039ccd]'>538385738583</td>
						<td className='px-6 py-4 text-black'>30,000</td>
					</tr>
                    
				</tbody>
			</table>
		</div>
	);
};

export default Table;
