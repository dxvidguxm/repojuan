/**
 * Utility to convert Google Drive viewing links to direct download/stream links.
 * Normal: https://drive.google.com/file/d/ID/view?usp=sharing
 * Direct: https://drive.google.com/uc?export=download&id=ID
 */
export const getDriveDirectLink = (driveUrl) => {
    if (!driveUrl) return '';
    const match = driveUrl.match(/\/d\/(.+?)\//);
    if (match && match[1]) {
        return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return driveUrl;
};

export const driveAssets = {
    // Examen Interciclo
    exi4_mp4: "https://drive.google.com/file/d/14x1R0Lm94ylSsk_nReb16_AVUCIh_fSZ/view?usp=sharing",
    exi13_mp4: "https://drive.google.com/file/d/17TynzjzUrfcz-77q4S1Qr_dg7qhfQVIv/view?usp=sharing",
    molde_blend: "https://drive.google.com/file/d/1C8LxY_1uTj4pp4jnBwtIbtMOoON_ct8s/view?usp=sharing",
    moldefinal_stl: "https://drive.google.com/file/d/1CU7b1SeN-thznGyl2yFJRds7pfqqpQdx/view?usp=sharing",

    // Practica 1
    practica1_1_mp4: "https://drive.google.com/file/d/1FIIs7GpuTdMUpTeteRKRreN4DTfEF1wK/view?usp=sharing",
    practica1_2_mp4: "https://drive.google.com/file/d/1JNCwKOqbePeLG_rxvOTjuJQQMG94NgV6/view?usp=sharing",

    // Practica 3
    practica3_0_mp4: "https://drive.google.com/file/d/1KJ2O27S7S6jk4P6QNQXn9MPZ7Id3E2gI/view?usp=sharing",

    // Practica 4 (Corte Laser)
    practica4_1_mp4: "https://drive.google.com/file/d/1M0hfUeFIA6oDGvG3dwzlJpnX1BYln_g3/view?usp=sharing",
    practica4_01_mp4: "https://drive.google.com/file/d/1OcMQL3BZbgcurG5vT48XmsRDI038UHfU/view?usp=sharing",
    practica4_2_mp4: "https://drive.google.com/file/d/1R5xkHUneZ1Q9IaFqTlRGo9g8dHe6RGFh/view?usp=sharing",
    practica4_3_mp4: "https://drive.google.com/file/d/1S4QiA3fk_loXnEmAyR5c0iQjyTKwNws4/view?usp=sharing",

    // Extra / Portfolio
    practicacholita3_mp4: "https://drive.google.com/file/d/1WzHSB9kkEe_DCw98v-MgUM4kr5I2V8mE/view?usp=sharing",
    practicaexamen8_mp4: "https://drive.google.com/file/d/1hmwxPCp5qmjNvEYTt0DM1sVtGAN3w5Nj/view?usp=sharing",
    practicaexamen9_mp4: "https://drive.google.com/file/d/1jzWo9u9yCEd9cbPFin-tlKRCeCpwE4cF/view?usp=sharing",
    practicallavero3_mp4: "https://drive.google.com/file/d/1uS_8inP5oZ3lURc74t9pEzBbwrJ6PHag/view?usp=sharing",
    practicallavero4_mp4: "https://drive.google.com/file/d/1wFQeYsrNnuCTuIIBr3ALOmMba7Wej4qe/view?usp=sharing",
    videoexm_mp4: "https://drive.google.com/file/d/1wIVIzLt6VsrtBcmLsZHlla-CXFO8edE4/view?usp=sharing"
};
