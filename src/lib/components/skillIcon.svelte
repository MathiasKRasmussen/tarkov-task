<script lang="ts">
	import type { Skill } from '@prisma/client';

	export let skill: Skill;
	export let level: number;
</script>

<!-- Avatar of Skill with level indicator-->
<div class="avatar indicator">
	<!-- Level indicator-->
	<span
		class="indicator-item indicator-bottom badge badge-neutral"
		title={`${skill.name} level ${level}`}>{level}</span
	>
	<!-- Trader avatar-->
	<div class="avatar flex">
		<div class="rounded w-14">
			<a href={skill.wiki} target="_blank">
				<img src={skill.image} alt={skill.name} title={skill.name} />
			</a>
		</div>
	</div>
</div>
