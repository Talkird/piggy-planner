<script lang="ts">
	let balance = $state(4512);
	let income = $state(0);
	let expense = $state(0);
</script>

<div class="flex items-center gap-8 bg-transparent">
	<div class="prose items-center justify-center rounded-md bg-sky-100 px-6 py-3 text-center">
		<h3 class="text-sky-600">Balance: ${balance}</h3>
	</div>
	<div class="prose items-center justify-center rounded-md bg-emerald-100 px-6 py-3 text-center">
		<h3 class="text-emerald-600">Income: ${income}</h3>
	</div>
	<div class="prose items-center justify-center rounded-md bg-red-100 px-6 py-3 text-center">
		<h3 class="text-red-600">Expense: ${expense}</h3>
	</div>
</div>
