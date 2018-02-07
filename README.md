# Teste de Software 

Testar é verificar se o software está fazendo o que deveria fazer, de acordo com os seus requisitos, e não está fazendo o que não deveria fazer. (Rios e Moreita - 2002)

Testar é o processo de executar um programa ou sistema com a intenção de encontrar defeitos (teste negativo). (Gen Myers - 1979)

Consiste em pensar em cenários diferentes, em casos de uso. Os cenários podem ser definidos antes, durante e após o desesenvolvimento.

Perfil para um bom profissional de teste:
- Explorador;
- Resolvedor de problemas;
- Incansável;
- Criativo;
- Perfeccionista;
- Diplomático (não aportar erros – tem que saber passar os erros).

Os testes devem ser realizados de acordo com os requisitos e objetivos do software.

O teste não extingue todos erros de um software, o teste diminui os riscos de ocorrência de problemas e contribui para o aumento da qualidade dos softwares.

**Falha**: o componente ou sistema entragam resultados diferentes do esperado.  
**Deficiência**: o componente ou sistema não falha, mas não está completo (não atende 100% aos requisitos ou nem sabe 100% os requisitos).  
**Erro**: ação humana que produz resultados incorretos. Quem erra é o ser humano, o software não erra, o software apresenta deficiências e falhas.  

Estudos comprovam que a aplicação deve gerar suas respostas em no máximo 3 segundos, pois este é o tempo limite que um usuário suporta (consegue esperar).

Podemos testar o nosso software de diversas formas: por meio de testes de aceitação, testes de carga (stress), testes de integração ou utilizando testes unitários.

**Tipos de Teste**  
- **Teste Caixa Preta**: teste funcional/teste da funcionalidade, teste de funcionalidade, entrada e saída. Executa e observa os resultados. Quem tem condições de realizar teste em caixa preta: qualquer stakeholder que conhece o escopo do software (seus objetivos e requisitos). O próprio programador durante o desenvolvimento realiza testes de caixa preta. O usuário final também tem condições de realizar testes de caixa preta, afinal de contas ele conhece como ninguém o que ele quer. Especifica-se as entradas e observa-se os resultados obtidos. 
- **Teste Caixa Branca**: teste estrutural/teste da estrutura, teste mais criterioso realizado em nível de código fonte (teste da lógica do software). É um teste mais complexo, pois visa verificar se as condições, os laços e os blocos de programa foram realmente escritos de forma correta, ou seja, se produzem resultado esperados. Quem tem condições de realizar teste de caixa branca: os stakeholders que conhecem o projeto e a codificação do software e principalmente aqueles que possuem conhecimento das tecnologias empregadas. Geralmente os desenvolvedores, os analistas, os projetistas e engenheiros de teste tem condições. O resultado dos testes (relatório de testes) deve indicar com precisão os pontos do software que apresentam estruturas inválidas. Nos testes de caixa branca geralmente fazemos uso de ferramentas.
- **Teste Caixa Cinza**: é uma mescla de técnicas de caixa preta e caixa branca.

**Regressão**  
É uma técnica de teste que consiste em repetir os mesmos testes aplicados nas versões anteriores nas novas versões, consiste na aplicação de todos os casos de teste (toda a bateria de testes).

**Frameworks para testes unitários (caixa branca)**  
- **jUnit**: pode ser incorporado ao eclipse e serve para testes em rotinas java.
- **nUnit e csUnit**: utilizados para testes de aplicações baseadas no dotnet framework.
- **dUnit**: utilizado em testes de aplicações win32 desenvolvidas no ambietne delphi.

Em um teste unitário, tipicamente, testamos os métodos de forma isolada, evitando acesso à outros recursos como sistema de arquivos, banco de dados, rede etc. Para testar métodos que fazem uso desses recursos em suas implementações, devemos fazer uso de stubs e/ou mocks.

**TDD (Test-Driven Development)**  
Desenvolvimento baseado em testes. Não é uma técnica de testes e sim uma metodologia de desenvolvimento onde os testes são focalizados principalmente em testes unitários, um exaustivo conjunto de testes de programação é realizado, normalmente os testes são escritos pelo desenvolvedor que fez o código, nenhum código vai para produção sem ter pelo menos um teste associado a ele, os testes direcionam como o código deverá ser estruturado,  implementa-se o mínimo que deve ser implementado - sem código em excesso. Depois de tudo isso utiliza-se técnicas de refatoramento para melhorar o seu código inicial.

De acordo com o TDD o teste deve ser implementado antes da implementação do método. Para cada método (teste unitário) vamos implementando testes que quebram os métodos, depois vamos ajustando os métodos até que passem por todos os testes num ciclo que se chama **Ciclo Red-Green-Refactor**. Esse processo passo a passo de implementa-teste-quebra-método e ajusta-método até que não restem situações de falha/quebra se chama BabyStep. Com o passar do tempo não precisa fazer tão passo a passo assim, principalmente para métodos simples, ou seja, basta implementar o método e depois fazer vários testes para o método já pronto.

> **Red**: faça falhar.  
**Greeen**: faça passar.  
**Refactor**: refatore.  

**Independentemente da Metodologia**  
Os casos de testes deverão ser formulados de modo a garantir que todos os pontos do fluxo sejam verificados pelo menos uma vez pelos testes. Existem técnicas que podem ser aplicadas na definição/elaboração de casos de testes, como exemplos podemos fazer uso do particionamento de equivalência, da análise de valor limite e da transição de estados. 

Seria interessante se pudéssemos testar todas as possíveis entradas de um sistema, para garantir que todas elas gerariam resultados esperados. Mas já sabemos que é impossível. É aí que entra o particionamento de equivalência que tem como objetivo agrupar e otimizar os casos de teste, afim de fazer a maior cobertura possível do sistema. Trata-se de uma técnica de testes que propõe a separação das possíveis entradas em categorias.

Uma vez elaborados os casos de testes, escreve-se a classe de teste (driver) com um método para cada caso de teste levantado. Caso seja necessário executar comportamentos ainda não implementados, utiliza-se da criação de “stubs” (outra abordagem utilizada é a criação de objetos Mock) que substituirão temporariamente o comportamento esperado. Realiza-se o teste na sua forma mais simples e a partir da classe de teste sendo executada com sucesso, faz-se um refatoramento para remover duplicidades e deixar a classe de teste o mais simples e estruturada possível. 

**Testes Alfa e Beta**  
Em casos especiais de processos de desenvolvimento de software – sistemas operacionais, sistemas gerenciadores de bancos de dados e outros softwares distribuídos em escala nacional e internacional – os testes requerem fases também especiais antes do produto ser disponibilizado a todos os usuários. O período entre o término do desenvolvimento e a entrega é conhecido como fase alfa e os testes executados nesse período, como testes alfa. PRESSMAN afirma que o teste alfa é conduzido pelo cliente no ambiente do desenvolvedor, com este “olhando sobre o ombro” do usuário e registrando erros e problemas de uso. Completada a fase alfa de testes, são lançadas a grupos restritos de usuários, versões de teste do sistema denominadas versões beta. Ele também é um teste de aceitação voltado para softwares cuja distribuição atingirá grande número de usuários de uma ou várias empresas compradoras. PRESSMAN afirma que o teste beta é conduzido em uma ou mais instalações do cliente, pelo usuário final do software. Diferente do teste alfa, o desenvolvedor geralmente não está presente. Conseqüentemente, o teste beta é uma aplicação do software num ambiente que não pode ser controlado pelo desenvolvedor. O cliente registra todos os problemas (reais ou imaginários) que são encontrados durante o teste beta e os relata ao desenvolvedor em intervalos regulares. Com o resultado dos problemas relatados durante os testes beta, os engenheiros de software fazem modificações e depois se preparam para liberar o produto de software para toda a base de clientes.

A comunidade do teste de software usa o termo teste fama de forma sarcástica referindo-se aos produtos que são mal testados e são entregues aos usuários finais para que estes encontrem os defeitos já em fase de produção.

**Candidato a Lançamento (Release Candidate)**  
Ultimamente, e principalmente na comunidade de software livre, é comum utilizar o termo candidato a lançamento para indicar uma versão que é candidata a ser a versão final, em função da quantidade de erros encontradas. Tais versões são um passo além do teste beta, sendo divulgadas para toda a comunidade.

**Mock Objects**  
Objetos Mock podem simular partes do comportamento do código de domínio, e são capazes de verificar se eles são usados como definido. Classes de domínio podem ser testados de forma isolada, simulando seus colaboradores com Mock Objects. Escrever e manter Mock Objects é frequentemente uma tarefa tediosa, que podem introduzir erros. EasyMock é uma biblioteca que gera dinamicamente Mock Objects – sem necessidade de escrevê-los, e nenhum código gerado.

C#
[TestClass]
public class EmailTests 
{
	[TestMethod]
	[ExpectedException(typeof(Exception))]
	public void Email_New_Email_Em_Branco_Deve_Gerar_Exception() 
	{
		var email = new Email("");
	}

	[TestMethod]
	public void Email_New_Email_Valido_Deve_Retornar_Email() 
	{
		var email = new Email("marco@gmail.com");
		Assert.AreEqual("marco@gmail.com", email.Endereco);
	}
}

--- 

**Fontes** 

- https://www.youtube.com/watch?v=rYBiuN02hls (UNIVESP - Engenharia de Software - Aula 18 - Visão geral de teste de software)
- http://tdd.caelum.com.br 
- https://brizeno.wordpress.com/2016/09/13/aprendendo-tdd-escrevendo-mais-testes/
- http://blog.thiagobelem.net/aprendendo-tdd-ou-desenvolvimento-orientado-a-testes 
- https://www.youtube.com/watch?v=KXYvWhcjluo (Elias Nogueira - Apresentação na Campus Party)
- https://pt.coursera.org/learn/tdd-desenvolvimento-de-software-guiado-por-testes 
- https://udgwebdev.com/praticando-tdd-com-junit
- https://www.youtube.com/watch?v=u9dD93mj9U4 (Alura - Teste com Jasmine) 
- https://www.youtube.com/watch?v=9CL2IF-1DRc (Testes/TDD com Silex & PHPUnit)
- https://www.youtube.com/watch?v=gxP4uPaIJ3s (Ângelo Ocanã - TDD em .Net e C#)
- https://www.youtube.com/watch?v=G3xtRR2VERE (Canal dotNET - Testes em .NET Core com xUnit e Fluent Assertions) 
- https://www.youtube.com/watch?v=RP_fiXvJv9w (Azure Brasil - Monitorando aplicações Web com o Application Insights - Renato Groff)
- https://www.youtube.com/watch?v=4MFVY9OS0LU (Canal dotNET - Testes automatizados de interfaces com Selenium)
- https://www.youtube.com/watch?v=ZtOnn6pRNXM (Canal dotNET - Testes de Software)
- https://www.youtube.com/watch?v=GYqzD2aeOeQ (Build Noturno - Teste de Software)