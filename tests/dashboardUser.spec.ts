import { test, expect } from '@playwright/test';
import {getEnv} from "./utils/getEnv.util";

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Vérification que la page de connexion est chargée
    const headingText = await page.innerText('h2');
    expect(headingText).toBe('Connexion');
    const username = getEnv<string>('USERNAME');
    const password = getEnv<string>('PASSWORD');
    // Remplir le formulaire de connexion
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);

    // Soumettre le formulaire
    await Promise.all([
        page.click('button[type="submit"]'),
        // Attendre la redirection vers le tableau de bord après une connexion réussie
        page.waitForURL('/dashboard')
    ]);

    // Vérification de la redirection vers le tableau de bord
    expect(page.url()).toContain('/dashboard');
});
test('Test de la page de tableau de bord utilisateur', async ({ page }) => {
    // Allez sur la page du tableau de bord utilisateur

    await page.goto('/dashboard');
});