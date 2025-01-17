<script lang="ts">
	const transactions = [
		{
			Date: '2025-01-16',
			Category: 'Food',
			Description: 'Lunch',
			Amount: -15.0
		},
		{
			Date: '2025-01-15',
			Category: 'Salary',
			Description: 'Monthly Paycheck',
			Amount: 2000.0
		},
		{
			Date: '2025-01-14',
			Category: 'Shopping',
			Description: 'New Shoes',
			Amount: -80.0
		},
		{
			Date: '2025-01-13',
			Category: 'Transport',
			Description: 'Train Ticket',
			Amount: -5.5
		},
		{
			Date: '2025-01-12',
			Category: 'Entertainment',
			Description: 'Movie Night',
			Amount: -12.0
		}
	];
</script>

<table class="min-w-full border-collapse border border-gray-300">
	<thead>
		<tr class="bg-gray-100">
			<th class="border border-gray-300 px-4 py-2">Date</th>
			<th class="border border-gray-300 px-4 py-2">Category</th>
			<th class="border border-gray-300 px-4 py-2">Description</th>
			<th class="border border-gray-300 px-4 py-2">Amount</th>
		</tr>
	</thead>
	<tbody>
		{#each transactions as transaction}
			<tr class="hover:bg-gray-50">
				<td class="border border-gray-300 px-4 py-2">{transaction.Date}</td>
				<td class="border border-gray-300 px-4 py-2">{transaction.Category}</td>
				<td class="border border-gray-300 px-4 py-2">{transaction.Description}</td>
				<td class="border border-gray-300 px-4 py-2">
					<span class={transaction.Amount < 0 ? 'text-red-500' : 'text-green-500'}>
						{transaction.Amount < 0 ? '-' : '+'}${Math.abs(transaction.Amount).toFixed(2)}
					</span>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
