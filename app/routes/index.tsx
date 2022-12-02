import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = async ({request}) => {
    return json({
        ip: request.headers.get("X-REAL-IP")
    });
};

export default function Index() {
    const {ip} = useLoaderData<{ip: string}>()

    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="text-center mx-auto flex justify-center mb-12">
                            <img src={"/logo_with_text.svg"} className={"w-52"} />
                        </span>
                        <span
                            className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                          まちカドネットワークへようこそ
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8">
                        <strong>このページが閲覧できているということは、まちカドネットワークに接続できています！おめでとうございます。</strong>
                    </p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <p>
                        さて、まちカドネットワークでみなさんに行っていただきたいことは２つあります。 <strong>住人向けにサービスを公開すること</strong> と <strong>他の住人のサービスを利用すること</strong>です。
                        まちカドネットワークは第二のインターネットであり、TwitterやGoogleなどのシステムは存在しません。そのためみなさんに現在「The Internet」で利用されているサービスのようなものを公開していただきたいのです。
                        そして皆でそれを利用することで、住人同士でサービスを作っていったり、実験的なシステムを試すことで自作サービスの公開場としても活躍できます。
                    </p>
                    <p>
                        まちカドネットワークのルールは以下の通りです。
                    </p>
                    <ul role="list">
                        <li>公序良俗を守ってください。守らないような人を招待したり、アクセスさせないでください。</li>
                        <li>他人の通信を改ざんしないでください。</li>
                        <li>他人の通信を（なるべく）傍受しないでください。傍受されていることを考え、機密情報は暗号化して送信してください。</li>
                    </ul>
                    <h2>まちカドネットワークのリソース一覧</h2>
                    <p>
                        まちカドネットワークの情報共有システムや公式サイト一覧です。
                    </p>
                    <ul role="list">
                        <li><a href={"https://machikado.network"}>公式サイト</a></li>
                        <li><a href={"https://scrapbox.io/machikado-network"}>Scrapbox</a></li>
                    </ul>
                    <h2>あなたの状況</h2>
                    <ul role={"list"}>
                        <li>IPアドレス: {ip}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
