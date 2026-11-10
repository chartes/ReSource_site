<script setup>
// Rapport Power BI (lien « Publier sur le web » : public, visible sans connexion par quiconque a le lien).
const POWERBI_URL =
  'https://app.powerbi.com/view?r=eyJrIjoiNThjNTc1NjgtNmIwZC00YzFiLWE5YWUtN2NlM2YwNmIwZWJjIiwidCI6IjRmOGZkNjk1LWIzYjUtNDA4Mi04MDA1LTYxMGU5NDUzZTZkMCIsImMiOjh9';
</script>

<template>
  <div class="animate-fade-in space-y-8">
    <div>
      <h1 class="page-title mb-2">Suivi du projet</h1>
      <p class="text-gray-500">
        Rapport Power BI des actions, opérations et productions du projet Re•Source.
        Il affiche le dernier rafraîchissement publié.
      </p>
    </div>

    <div class="aspect-video w-full">
      <iframe
        title="Rapport de suivi Power BI"
        :src="POWERBI_URL"
        class="w-full h-full rounded-2xl border border-gray-100 shadow-sm"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
