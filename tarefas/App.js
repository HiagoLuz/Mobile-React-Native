import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, FlatList, TouchableOpacity, Checkbox} from "react-native";

import * as SQLite from 'expo-sqlite';
 
const db = SQLite.openDatabase("tarefas.julio");


const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
 
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
 
  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };
 
  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id ASC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };
 
  const renderTarefa = ({ item }) => {


    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: "red",
      }}>
        <Text style={{ marginRight: 9}}>{item.id}</Text>
        <Text>{item.nome}</Text>
        
      </View>
    );
  };
 
  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);
 
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <StatusBar backgroundColor="#222" />

      <View style={{
        width: '100%', height: '15%', alignItems: 'center', justifyContent: 'center', backgroundColor:'red'
        }}>
        <Text style={{color: 'black', fontSize: 40, letterSpacing: 5, textTransform: 'uppercase', fontWeight: 'bold'}}>Tarefas</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ paddingHorizontal: 10, marginHorizontal: 10, borderBottomWidth: 2, borderColor:'pink', borderRadius: 5, width: '80%', height: 40}}
      />
      <TouchableOpacity onPress={incluirTarefa} style={{ backgroundColor: 'pink', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
          +
        </Text>
      </TouchableOpacity>
      </View>

      <FlatList
        style={{borderWidth: 2, borderColor: 'pink', margin: 20, }}
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />
    </View>
  );
};
 
export default App;



