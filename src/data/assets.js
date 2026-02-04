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
    exi_new_mp4: "https://drive.google.com/file/d/1ykPZyOU7wJi-DYgQuKjjvLtx797iROKV/view?usp=drive_link",
    molde_blend: "https://drive.google.com/file/d/1wIVIzLt6VsrtBcmLsZHlla-CXFO8edE4/view?usp=sharing",
    moldefinal_stl: "https://drive.google.com/file/d/1CU7b1SeN-thznGyl2yFJRds7pfqqpQdx/view?usp=sharing",

    // Practica 1
    practica1_1_mp4: "https://drive.google.com/file/d/1FIIs7GpuTdMUpTeteRKRreN4DTfEF1wK/view?usp=sharing",
    practica1_2_mp4: "https://drive.google.com/file/d/1JNCwKOqbePeLG_rxvOTjuJQQMG94NgV6/view?usp=sharing",

    // Practica 3
    practica3_0_mp4: "https://drive.google.com/file/d/1FIIs7GpuTdMUpTeteRKRreN4DTfEF1wK/view?usp=sharing",

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
    videoexm_mp4: "https://drive.google.com/file/d/1C8LxY_1uTj4pp4jnBwtIbtMOoON_ct8s/view?usp=sharing",

    // Proyecto Final
    pro_fin_mp4_01: "https://drive.google.com/file/d/1z_Zxnjcf3RejdQDPlGU7yAQ0P9UULAHv/view?usp=drive_link",
    pro_fin_mp4_02: "https://drive.google.com/file/d/14L7gp2LLJtM0t6FXi6DNaT2f-24ycCYY/view?usp=drive_link",
    pro_fin_mp4_03: "https://drive.google.com/file/d/1MVM-z0chW4BvoB61diRU6tTTdtkFIwSw/view?usp=drive_link",
    pro_fin_mp4_04: "https://drive.google.com/file/d/14L-AP07BUdlrrZJPNZRwgnFvKU164Xc4/view?usp=drive_link",
    pro_fin_mp4_05: "https://drive.google.com/file/d/1J25urVQqVJsQlwym5Lsmcf7Z951Ado5p/view?usp=drive_link",
    pro_fin_mp4_06: "https://drive.google.com/file/d/1H6KA_RI_xkZs5m_LkDoyUCx8D7C6s-1A/view?usp=drive_link",
    pro_fin_mp4_07: "https://drive.google.com/file/d/1kZc-Q2IngI87yl8CMWLHJanDudjxI38x/view?usp=drive_link",
    pro_fin_mp4_08: "https://drive.google.com/file/d/1gRPVti4wdkEkQeWL-lodkfNHwIrz06WB/view?usp=sharing",
    pro_fin_mp4_09: "https://drive.google.com/file/d/1Zw3LjE76Q7-UmVHOt1IW-g6SWDs7E0nU/view?usp=sharing",
    pro_fin_video_final: "https://drive.google.com/file/d/12Gz8ocnGRzigGenrqwdm2ZCn49fcUnOU/view?usp=sharing",
    pro_fin_video_explicacion: "https://drive.google.com/file/d/1ymRgo3-FC0e4v05UOnuCJLeGTxJeyu1J/view?usp=sharing",

    // Tapon Assets (Proyecto Final)
    tapon_blend: "https://drive.google.com/file/d/1Kb3Evt3QmlbsSBH43lehXdxQpCxvr6SI/view?usp=sharing",
    tapon_stl: "https://drive.google.com/file/d/1ZlVtGhbZdls7kas2uQxfSoq4AFmjIBug/view?usp=sharing",
    mango_baston_stl: "https://drive.google.com/file/d/1cEYdI72vJOLQvTfNkxtiqNCIMc_ZBlQe/view?usp=sharing",
    baston_completo_stl: "https://drive.google.com/file/d/1kMcDrfxX1UXcqjCUjmDNe5U60KSIWkJ8/view?usp=sharing",
    caja_superior_stl: "https://drive.google.com/file/d/1l5im3i_wADj680DmXBf22MiZ3_tWoD4e/view?usp=sharing",
    caja_inferior_stl: "https://drive.google.com/file/d/1oC3geHpCnF5vvtW7evv9Se-DoG4qM9hQ/view?usp=sharing"
};
