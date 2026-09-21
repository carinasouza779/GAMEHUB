// ==============================
// ETAPA 4 - CRIAR COMPONENTE
// ==============================
// Nós vamos reutilizar o componente em 03 telas diferentes (Inicio, Jogos, Favoritos)
import {view, text, Image, Pressable, StyleSheet} from "react-native";

import { useRouter } from "expo-router";
// navegação programatica.

import {cores} from "../data/tema";
import { View } from "react-native";

export default function GameCard({ jogo }) {
    const router = useRouter();

    return (
        <Pressable
            style={styles.card} 
            onPress={() => router.push(`/jogos/${jogo.id}`)} //Navega entre as cotas
        >
            <Image source={jogo.imagem} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={styles.nome} numberOfLines={1}>
                    {jogo.nome}
                </Text>
                <text style={styles.genero}>{jogo.genero}</text>
                <text style={styles.nota}>⭐{jogo.nota}</text>
            </View>


        </Pressable>
    )
}
const styles = StyleSheet.create({
    
})