// ETAPA 1 -   INICIO DO PROJETO: TELA INICIAL

// O que fazemos aqui?
// Esta é a tela inicial do app (rota "/"). 

import { View, text, ScrollView, FlatList, pressable, StyleSheet} from "react-native";
// view - Conteiner básicos
// text - Para exibir textos
// ScrollView - Permite rolagem vertical
// FlatList - Lista otimizada com rolagem
//Pressable - Botão de feedback de toque
//StyleSheet - Define estilos

import { useRouter } from "expo-router";
// acesso ao objeto router, tem a função de navegação baseada em arquivos (biblioteca).

import GameCard from "../components/GameCard";
// Reutilizar componentes, isso evita duplicação de código e mantem a consistência visual.

import { jogos } from "../data/jogos";
// Importante uma array de objetos do arquivo data/jogos.js

import { cores } from "../data/tema"
// importa a paleta de cores do app do arquivo data/tema.js

// ===================================================
export default function Inicio() {
     const router = useRouter();
    // obtemos o objeto de navegação 

    //--------------------------------
    // BLOCO 1 - PREPARAÇÃO DOS DADOS
    //--------------------------------

    const destaques = jogos.filter((jogo) => jogo.destaque);
    // percorre o array de jogos e cria um novo array destaques contendo apenas os objetos cuja o campo "destaque" seja true.
    const populares = [...jogos].sort((a, b) => b.nota - a.nota).slice(0, 5);
    // ...jogos -> cria uma cópia do array original
    // .sort((a, b) => b.nota - a.nota) ordena a cópia da maior nota para a menor
    // .slice(0, 5) : extrai apenas os 5 primeiros elementos do array

    //--------------------------------
    // BLOCO 2 - ESTRUTURA DA TELA
    //--------------------------------
    
    return (
        // Inicio do JSK retornando pelo componente: define o que será renderizado na tela
        <ScrollView style={style.container} contentContainerStyle={ Styles.conteudo }>
            {/* scrollview: Container com rolagem vertical */}
            <Text style={style.titulo}>GameHub</Text>
            {/* Exibe o texto "GameHub" como titulo, usando o estilo "titulo" */}
            <Text style={style.subtitulo}>Seu universo de jogos em um só lugar</Text>

            //--------------------------------
            // BLOCO 2.1 - SEÇÃO JOGOS
            //--------------------------------

            <Text style={style.secaoTitulo}>Jogos em destaque</Text>
            {/* Exibe o titulo desta seção, usando o estilo "secaoTitulo" */}
            <FlatList
                data={destaques}
                // Define a fonte de dados da lista - array "destaques".
                keyExtractor={(item) => item.id}
                // Função que retorna a chave única
                horizontal
                // Faz a lista
                showsHorizontalScrollIndicator={false}
                // Oculta a barrinha de rolagem horizontal, deixando a interface mais limpa
                renderItem={({ item }) => <GameCard jogo={item}/>}
                // Função chamada para cada elemento do array "data"
             />

            //------------------------------------
            // BLOCO 2.2 - SEÇÃO "MAIS POPULARES"
            //------------------------------------
            {/* Mesma estrutura da seção anterior, mas com dados diferentes */}
            <text style={styles.secaoTitulo}>Mais Populares</text>
            {/* Título da segunda seção, reaproveitando o mesmo estilo
            "Seção Titulo" */}

            <FlatList
                data={populares}
                // Desta vez a fonte de dados é o array "populares" (top 5 por nota)
                keyExtractor={(item) => item.id}
                // Mesma lógica de chave única no id do jogo
                horizontal
                //Linha horizontal, igual à seção anterior
                showsHorizontalScrollIndicator={false}
                // Esconder o indicador de rolagem
                renderItem={({item}) => <GameCard jogo={item} />}
                // Reutiliza o mesmo componente GameCard, provando que ele funciona com qualquer lista de jogos!
            />
            
            //------------------------------------
            // BLOCO 2.3 - BOTÃO "VER TODOS OS JOGOS"   
            //------------------------------------

            {/* Pressable oferece mais controle sobre o estilo e feedback visual */}

            <pressable
             // Aplica o estilo visual no botão!
            style={styles.botao}
            onPress={() => router.push("./jogos")}
            // onPress: função executada quando o usuário toca no botão
            // router.psuh("./jogos") navega para a rota "/jogos"
            >
                <text style={styles.textobotao}>Ver todos os Jogos</text>
           
            </pressable>
        </ScrollView>
           
    );

}

//------------------------------------
// BLOCO 3 - ESTILOS   
//------------------------------------
// PORQUE USAR StylesSheet?
// - StyleSheet.create oyimixs os estilos (evita recriação desnecessária)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: cores.fundo,        
    },
    conteudo:{
        padding: 20,
        paddingBottom:40,
    },
    titulo:{
        fontSize: 32,
        fontWeight:"bold",
        color: cores.textoPrincipal,
    },
    subtitulo: {
        fontSize:15,
        color: cores.textoSecundario,
        marginTop: 4,
        marginBottom: 24,
    },
    secaoTitulo:{
        fontSize: 16,
        fontWeight: "bold",
        color: cores.textoPrincipal,
        marginTop: 8,
        marginBottom: 12,
    },
    botao:{
        backgroundColor: cores.roxo,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 24,
    },
    textobotao:{
        color:  cores.textoPrincipal,
        fontSize: 16,
        fontWeight: "bold",
        
    }

})